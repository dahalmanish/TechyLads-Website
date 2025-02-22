import { Link } from "react-router-dom";
import Button from "../Button";

const DeveloperCard = ({ jobData }) => {
  return (
    <section className="mb-2 border bg-neutral-100 p-4 rounded-lg max-w-full">
      <h2 className="text-2xl font-bold mb-4 text-center">Open Positions</h2>
      {jobData.length === 0 ? (
        <p className="text-center text-gray-600">No job listings available</p>
      ) : (
        jobData.map((job) => (
          <div key={job._id} className="card md:flex max-w-lg mb-6 border p-4 rounded-lg bg-white shadow-md">
            <div className="flex-grow text-center md:text-left">
              <p className="font-bold">{job.title}</p>
              <p className="mt-2 mb-3">{job.description}</p>
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-200 border px-3 py-1.5 rounded-lg text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="py-4 flex gap-4">
                <Link to={`/jobs/${job._id}`}>
                  <Button name="View Details" style="w-40 h-10 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded shadow-2xl" />
                </Link>
                <Link to="/contact">
                  <Button name="Contact Us" style="w-40 h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-2xl" />
                </Link>
              </div>
            </div>
          </div>
        ))
      )}
    </section>
  );
};

export default DeveloperCard;
