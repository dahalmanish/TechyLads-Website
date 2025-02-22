const Testimonials = () => {
    const testimonials = [
      {
        name: "Amrit Thapa",
        review: "Good Services and Friendly Staff",
        image: "review1.jpg",
      },
      {
        name: "Bhim Bahadur Bonjan",
        review: "Better Facilty and Good Working Environment",
        image: "Review2.jpg",
      },
      {
        name: "Amit Khadka",
        review: "Highly recommended for IT Services",
        image: "Review3.jpg",
      },
    ];
  
    return (
      <section className="bg-white py-12 font-Outfit">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-8">Customer Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 mx-auto rounded-full mb-4" 
                />
                <p className="text-gray-700 italic">"{testimonial.review}"</p>
                <h4 className="mt-4 font-semibold text-gray-900">{testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;