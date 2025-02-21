import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card"; // Import the Card component

const CardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/pds"); // Update with your API URL
        setCards(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center mb-6 font-Outfit">Our Services</h2>
    <div className="flex flex-wrap gap-4 p-6 justify-center">
      {cards.map((card) => (
        <Card 
          key={card._id} 
          title={card.title} 
          description={card.description} 
          image={card.image_url} 
        />
      ))}
    </div>
    </div>
  );
};

export default CardList;
