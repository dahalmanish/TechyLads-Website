import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const Question = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [questions, setQuestions] = useState([]);
  

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/ans");
        setQuestions(response.data);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div className="w-full p-8 rounded-lg shadow-md font-Outfit">
      <h2 className="text-2xl mb-6 font-semibold">Frequently Asked Questions</h2>

      {questions.map((q) => (
        <div key={q._id} className="border-b border-gray-200 py-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setActiveQuestion(activeQuestion === q._id ? null : q._id)}
          >
            <h3 className="text-lg font-semibold">{q.question}</h3>
            {activeQuestion === q._id ? <FaMinusCircle /> : <FaPlusCircle />}
          </div>

          <AnimatePresence>
            {activeQuestion === q._id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-2 text-gray-700"
              >
                {q.answer}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Question;
