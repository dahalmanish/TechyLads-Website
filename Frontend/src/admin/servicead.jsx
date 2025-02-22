import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../service/supabase";

export default function Servicead() {
  const [newService, setNewService] = useState({
    title: "",
    description: "",
    image: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [services, setServices] = useState([]); // Store fetched services
  const [selectedService, setSelectedService] = useState(null); // Track the selected service for updating

  // Fetch services from the backend
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("https://techy-lads-website.vercel.app/api/svs");
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);

  // Handle form input changes
  const handleServiceChange = (e) => {
    const { name, value } = e.target;
    setNewService((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
      setImageFile(file);
    }
  };

  // Upload image to Supabase and return its URL
  const uploadImageToSupabase = async () => {
    if (!imageFile) return null;

    const fileName = `${Date.now()}-${imageFile.name}`;
    const { data, error } = await supabase.storage
      .from("images")
      .upload(fileName, imageFile);

    if (error) {
      console.error("Error uploading image:", error);
      alert("Image upload failed.");
      return null;
    }

    return supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
  };

  // Reset form after submission
  const resetForm = () => {
    setNewService({ title: "", description: "", image: "" });
    setImagePreview(null);
    setImageFile(null);
    setSelectedService(null);
  };

  // Handle service submission (Add or Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const imageUrl = await uploadImageToSupabase();
      if (!imageUrl) return;

      const serviceData = { ...newService, image_url: imageUrl };
      if (selectedService) {
        // If there's a selected service, update it
        const response = await axios.put(`https://techy-lads-website.vercel.app/api/services/${selectedService._id}`, serviceData);
        if (response.status === 200) {
          alert("Service updated successfully!");
        }
      } else {
        // If no service is selected, create a new one
        const response = await axios.post("https://techy-lads-website.vercel.app/api/services", serviceData);
        if (response.status === 201) {
          alert("Service added successfully!");
        }
      }
      resetForm();
    } catch (error) {
      console.error("Error submitting service:", error);
      alert("Failed to add/update service.");
    }
  };

  // Handle delete service
  const handleDelete = async (serviceId) => {
    console.log("Deleting service with ID:", serviceId);  // Add this line for debugging
    try {
      const response = await axios.delete(`https://techy-lads-website.vercel.app/api/services/${serviceId}`);
      if (response.status === 200) {
        alert("Service deleted successfully!");
        setServices((prevServices) => prevServices.filter((service) => service._id !== serviceId));
      }
    } catch (error) {
      console.error("Error deleting service:", error);
      alert("Failed to delete service.");
    }
  };
  

  // Handle edit service
  const handleEdit = (service) => {
    setNewService({
      title: service.title,
      description: service.description,
      image: service.image_url,
    });
    setSelectedService(service);
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-1/4 p-6 bg-white border-r">
        <h2 className="text-lg font-bold">Admin Panel</h2>
        <nav className="mt-6 space-y-4">
          <Link to="/dashboard" className="block text-gray-600 hover:text-blue-500">Dashboard</Link>
          <Link to="/product" className="block text-gray-600 hover:text-blue-500">Product</Link>
          <Link to="/service" className="block text-gray-600 hover:text-blue-500">Service</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <section className="w-3/4 p-8">
        <h1 className="text-4xl font-bold text-black">
          {selectedService ? "Edit Service" : "Add New Service"}
        </h1>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6 bg-white p-6 shadow-lg rounded-lg">
          <input
            type="text"
            name="title"
            value={newService.title}
            onChange={handleServiceChange}
            placeholder="Service Title"
            className="w-full p-3 border rounded-md"
            required
          />
          <input
            type="text"
            name="description"
            value={newService.description}
            onChange={handleServiceChange}
            placeholder="Description"
            className="w-full p-3 border rounded-md"
            required
          />
          
          <input type="file" onChange={handleImageChange} className="w-full p-3 border rounded-md" required />
          
          {/* Image Preview */}
          {imagePreview && (
            <div className="mt-3 relative">
              <img src={imagePreview} alt="Preview" className="w-20 h-20 object-cover rounded-md" />
              <button
                type="button"
                onClick={() => { setImagePreview(null); setImageFile(null); }}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 text-xs"
              >
                X
              </button>
            </div>
          )}
          
          <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md shadow-lg hover:bg-black hover:text-white">
            {selectedService ? "Update Service" : "Add Service"}
          </button>
        </form>

        {/* Service List */}
        <h2 className="mt-12 text-2xl font-bold">Service List</h2>
        <ul className="mt-6 space-y-4">
          {services.map((service) => (
            <li key={service._id} className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
              <div>
                <h3 className="font-bold">{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleEdit(service)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-black hover:text-white"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(service._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
