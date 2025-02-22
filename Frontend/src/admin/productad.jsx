import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar"; // Import Sidebar
import { supabase } from "../service/supabase";

export default function Productad() {
  const [newCard, setNewCard] = useState({
    title: "",
    description: "",
    image: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [products, setProducts] = useState([]); // Store fetched products
  const [selectedProduct, setSelectedProduct] = useState(null); // Track the selected product for updating

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://techy-lads-website-42ca.vercel.app/api/pds");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Handle form input changes
  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setNewCard((prev) => ({ ...prev, [name]: value }));
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
    setNewCard({ title: "", description: "", image: "" });
    setImagePreview(null);
    setImageFile(null);
    setSelectedProduct(null);
  };

  // Handle card submission (Add or Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const imageUrl = await uploadImageToSupabase();
      if (!imageUrl) return;

      const cardData = { ...newCard, image_url: imageUrl };
      if (selectedProduct) {
        // If there's a selected product, update it
        const response = await axios.put(`https://techy-lads-website-42ca.vercel.app/api/products/${selectedProduct._id}`, cardData);
        if (response.status === 200) {
          alert("Product updated successfully!");
        }
      } else {
        // If no product is selected, create a new one
        const response = await axios.post("https://techy-lads-website-42ca.vercel.app/api/products", cardData);
        if (response.status === 201) {
          alert("Product added successfully!");
        }
      }
      resetForm();
    } catch (error) {
      console.error("Error submitting card:", error);
      alert("Failed to add/update product.");
    }
  };

  // Handle delete product
  const handleDelete = async (productId) => {
    try {
      const response = await axios.delete(`https://techy-lads-website-42ca.vercel.app/api/products/${productId}`);
      if (response.status === 200) {
        alert("Product deleted successfully!");
        setProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId));
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product.");
    }
  };

  // Handle edit product
  const handleEdit = (product) => {
    setNewCard({
      title: product.title,
      description: product.description,
      image: product.image_url,
    });
    setSelectedProduct(product);
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar /> {/* Reuse Sidebar Component */}
      <section className="w-3/4 p-8">
        {/* Add or Edit Product Form */}
        <h1 className="text-4xl font-bold text-black">
          {selectedProduct ? "Edit Product" : "Add New Product"}
        </h1>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6 bg-white p-6 shadow-lg rounded-lg">
          <input
            type="text"
            name="title"
            value={newCard.title}
            onChange={handleCardChange}
            placeholder="Product Title"
            className="w-full p-3 border rounded-md"
            required
          />
          <input
            type="text"
            name="description"
            value={newCard.description}
            onChange={handleCardChange}
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
            {selectedProduct ? "Update Product" : "Add Product"}
          </button>
        </form>

        {/* Product List */}
        <h2 className="mt-12 text-2xl font-bold">Product List</h2>
        <ul className="mt-6 space-y-4">
          {products.map((product) => (
            <li key={product._id} className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
              <div>
                <h3 className="font-bold">{product.title}</h3>
                <p>{product.description}</p>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleEdit(product)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-black hover:text-white"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product._id)}
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
