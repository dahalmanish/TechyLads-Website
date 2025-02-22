import axios from 'axios';
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  const [formData, setFormData] = useState({ question: '', answer: ''});
  // Add this state definition
  const [openIndex, setOpenIndex] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const response = await axios.post("http://localhost:8000/api/faqs", formData);
      alert("Data submitted successfully!");
      setFormData({ question: "", answer: ""}); // Reset form
   console.log("response",response)
   console.log("data sent ")
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };
  

  
  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <Sidebar/>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* FAQ Form Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">Add New FAQ</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Question
              </label>
              <input
               name="question"
                type="text"
                value={formData.question}
                onChange={handleChange}
                className="w-full text-black px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Enter the question"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Answer
              </label>
              <textarea
                name="answer" 
                value={formData.answer}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows="4"
                placeholder="Enter the answer"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Add FAQ
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;