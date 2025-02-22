import axios from "axios";
import React, { useEffect, useState } from "react";
import DeveloperCard from "./Pcard";

const Position = () => {
  const [jobList, setJobList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/jobs");
        setJobList(response.data); 
      } catch (err) {
        setError("Failed to fetch job listings");
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  if (loading) return <p className="text-center text-gray-600">Loading jobs...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return <DeveloperCard jobData={jobList} />;
};


export default Position;
    

