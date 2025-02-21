import Button from "../Button";
import { Link } from "react-router-dom";
const DeveloperCard = () => {
    return (
      <section className="mb-2 border bg-neutral-100 p-4 rounded-lg max-w-full">
        <div className="mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Open Positions</h2>
          <div className="card md:flex max-w-lg">
            <div className="w-20 h-20 mx-auto mb-6 md:mr-6 flex-shrink-0">
              <img className="object-cover rounded-full" src="Logo1.png" alt="User" />
            </div>
            <div className="flex-grow text-center md:text-left">
              <p className="font-bold">Senior Java Developer</p>
              <p className="mt-2 mb-3">Proficient in Java Fields</p>
              <div>
                <span className="bg-gray-200 border px-3 py-1.5 rounded-lg text-sm">Experience</span>
                <span className="bg-gray-200 border px-3 py-1.5 rounded-lg text-sm ml-2">FullTime</span> 
                <span className="bg-gray-200 border px-3 py-1.5 rounded-lg text-sm ml-2">Urgent</span>
              </div>
                <div className="py-4">
                <Link to="/contact"><Button name="Contact Us" style=" w-40 h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-2xl" /></Link>
                </div>
            </div>
            
            
          </div>
        </div>
      </section>
    );
  };
  
  export default DeveloperCard;