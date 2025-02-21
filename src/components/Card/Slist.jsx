import React, { useState, useEffect } from 'react';
import axios from "axios";
import Scard from "./Scard"; // Import the Card component

const Slist = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/svs"); // Update with your API URL
        setCards(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap gap-8 p-6 justify-center">
      {cards.map((card) => (
        <Scard 
          key={card._id} 
          title={card.title} 
          description={card.description} 
          image={card.image_url} 
        />
      ))}
    </div>
  );
};

export default Slist;
