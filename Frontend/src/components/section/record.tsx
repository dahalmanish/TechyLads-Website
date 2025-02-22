import { Bug, Coffee, Ghost, Hand, Moon } from "lucide-react";
import React from "react";

const records = [
  { icon: <Moon size={40} />, title: "Late Night Spent Coding", count: "1,000+" },
  { icon: <Hand size={40} />, title: "High Fives Given", count: "500+" },
  { icon: <Bug size={40} />, title: "Bugs Squashed", count: "1,000+" },
  { icon: <Ghost size={40} />, title: "Team Spirit Boosted", count: "30+" },
  { icon: <Coffee size={40} />, title: "Coffee Breaks Taken", count: "400+" },
];

const Record = () => {
  return (
    <div className="max-w-5xl mx-auto bg-white p-8 mt-20 rounded-lg shadow-xl">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Our <span className="text-blue-800">Records</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
        {records.map((record, index) => (
          <div key={index} className="flex flex-col items-center space-y-2 p-6 bg-white rounded-lg shadow-lg">
            <div className="text-gray-800">{record.icon}</div>
            <p className="font-medium">{record.title}</p>
            <p className="text-xl font-bold text-gray-900">
              {record.count}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Record;
