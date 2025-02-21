import React from 'react';
import { Link } from 'react-router-dom';

const Contactform = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5a3b9cde-d5c4-4a12-be70-077ef95d864d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      event.target.reset(); // Reset the form after submission
    }
  }

  return (
    <div className='flex flex-col md:flex-row justify-center p-40 md:p-10 gap-6 md:gap-x-16 font-Outfit'>
      {/* Contact Info Section */}
      <div className='flex-1 space-y-6 p-6 md:p-10 border border-blue-500 rounded-lg shadow-lg text-center md:text-left'>
        <h3 className='text-2xl md:text-3xl font-bold'>Contact Us</h3>
        <p className='text-lg md:text-xl'>Email, call, or complete the form to get connected!</p>
        <div className='flex flex-col space-y-4'>
          <Link className='font-bold text-blue-600 hover:underline' to='/'>hello@techylads.net</Link>
          <Link className='font-bold text-blue-600 hover:underline' to='/'>+977-9851240433</Link>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className='font-semibold text-lg'>Customer Support</h3>
            <p>Our dedicated support team is available 24/7 to promptly address any concerns or questions you may have.</p>
          </div>
          <div>
            <h3 className='font-semibold text-lg'>Feedback and Suggestions</h3>
            <p>At TechyLads, we truly value your feedback and are committed to continuously improving our services.</p>
          </div>
        </div>
      </div>

      {/* Registration Form */}
      <div className='w-full md:w-auto'>
        <form onSubmit={onSubmit} className="w-full max-w-md bg-white border border-gray-300 rounded-lg shadow-lg p-6">
          <p className="text-2xl md:text-3xl font-bold text-center mb-4">Get in Touch</p>

          {/* Full Name & Email Side by Side */}
          <div className="flex flex-col md:flex-row md:gap-4">
            <div className="w-full">
              <label className="block mb-1 font-semibold">Full Name</label>
              <input required type="text" name="name" className="border p-2 w-full rounded-md" />
            </div>

            <div className="w-full">
              <label className="block mb-1 font-semibold">Email</label>
              <input required type="email" name="email" className="border p-2 w-full rounded-md" />
            </div>
          </div>

          {/* Message Input */}
          <div className="mt-4">
            <label className="block mb-1 font-semibold">Message</label>
            <textarea required name="message" className="border p-2 w-full rounded-md" />
          </div>

          {/* Submit Button */}
          <button className="w-full bg-blue-600 text-white py-2 px-6 rounded-md mt-6 hover:bg-blue-700 transition duration-300">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contactform;
