import { useState } from "react";

function GridSection({ images }) {
  return (
    <div className="p-4 bg-gray-100 rounded-lg w-full">
      {/* <h2 className="text-2xl font-semibold mb-4">{title}</h2> */}
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div key={index} className="flex justify-center items-center">
            <img src={image.src} alt={image.alt} className="w-40 h-40 object-cover rounded-lg shadow-md" />
          </div>
        ))}
      </div>
    </div>
  );
}

function Frontend() {
  return (
    <GridSection
      title="Frontend Development"
      images={[
        { src: "./image/frontend/react.png", alt: "React" },
        { src: "./image/frontend/angular.png", alt: "angular" },
        { src: "./image/frontend/vue.png", alt: "vue" },
        { src: "./image/frontend/html5.png", alt: "html5" },
        { src: "./image/frontend/css3.png", alt: "cs3" },
        { src: "./image/frontend/javas.png", alt: "javascript" },
        { src: "./image/frontend/boot.png", alt: "bootstrap" },
        { src: "./image/frontend/sass.png", alt: "sass" },
      ]}
    />
  );
}

function Backend() {
  return (
    <GridSection
      title="Backend Development"
      images={[
        { src: "./image/backend/node.png", alt: "Node.js" },
        { src: "./image/backend/python.png", alt: "Express.js" },
        { src: "./image/backend/java.png", alt: "Django" },
        { src: "./image/backend/php.png", alt: "Flask" },
        { src: "./image/backend/laravel.png", alt: "Ruby on Rails" },
        { src: "./image/backend/rust.png", alt: "Spring Boot" },
        { src: "./image/backend/docker.png", alt: "Laravel" },
        { src: "./image/backend/database.png", alt: "PHP" },
      ]}
    />
  );
}

function Databases() {
  return (
    <GridSection
      title="Databases"
      images={[
        { src: "./image/database/mongo.png", alt: "MySQL" },
        { src: "./image/database/my sql.png", alt: "PostgreSQL" },
        { src: "./image/database/sql seerver.png", alt: "MongoDB" },
        { src: "./image/database/digitalocean.png", alt: "Firebase" },
        { src: "./image/database/firbase.png", alt: "SQLite" },
        { src: "./image/database/awsrds.png", alt: "Redis" },
        { src: "./image/database/azure.png", alt: "Oracle" },
        
      ]}
    />
  );
}

function MobileDevelopment() {
  return (
    <GridSection
      title="Mobile Development"
      images={[
        { src: "./image/mobile_development/react_native.png", alt: "React Native" },
        { src: "./image/mobile_development/android.png", alt: "Flutter" },
        { src: "./image/mobile_development/ios.png", alt: "Swift" },
        { src: "./image/mobile_development/swift.png", alt: "Kotlin" },
        { src: "./image/mobile_development/flutter.png", alt: "Android" },
        { src: "./image/mobile_development/javascript.png", alt: "iOS" },
        { src: "./image/mobile_development/expo.png", alt: "Unity" },
       
      ]}
    />
  );
}

function MachineLearning() {
  return (
    <GridSection
      title="Machine Learning"
      images={[
        { src: "./image/machinlearning/machinelearning.png", alt: "TensorFlow" },
        { src: "./image/machinlearning/deeplearning.png", alt: "PyTorch" },
        { src: "./image/machinlearning/datascience.png", alt: "Scikit-Learn" },
        { src: "./image/machinlearning/dataanalysis.png", alt: "NumPy" },
        { src: "./image/machinlearning/neural network.png", alt: "Pandas" },
        { src: "./image/machinlearning/ai_research", alt: "Matplotlib" },
       
      ]}
    />
  );
}

function Grid() {
  const [selectedSection, setSelectedSection] = useState("frontend");

  return (
    <div className="flex flex-col items-center justify-center  min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6 ">Dynamic Sections in React</h1>

    
      <div className="flex flex-wrap gap-4 mb-6">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setSelectedSection("frontend")}>
          Frontend
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => setSelectedSection("backend")}>
          Backend
        </button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded" onClick={() => setSelectedSection("databases")}>
          Databases
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => setSelectedSection("mobile_development")}>
          Mobile Development
        </button>
        <button className="bg-purple-500 text-white px-4 py-2 rounded" onClick={() => setSelectedSection("machine_learning")}>
          Machine Learning
        </button>
      </div>

   
      <div className="w-3/4 p-6 border rounded-lg shadow-md bg-white">
        {selectedSection === "frontend" && <Frontend />}
        {selectedSection === "backend" && <Backend />}
        {selectedSection === "databases" && <Databases />}
        {selectedSection === "mobile_development" && <MobileDevelopment />}
        {selectedSection === "machine_learning" && <MachineLearning />}
      </div>
    </div>
  );
}

export default Grid;