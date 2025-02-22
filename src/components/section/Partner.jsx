import React from 'react';
import img1 from '../../assets/image1.png';
import img2 from '../../assets/image2.png';
import img7 from '../../assets/image7.png';
import img5 from '../../assets/image5.png';
import img6 from '../../assets/image6.png';
import img10 from '../../assets/image10.png';
import img9 from '../../assets/image9.png';
import img8 from '../../assets/image8.png';
import img4 from '../../assets/image4.png';

const images = [img1, img2, img5, img6, img10, img9, img8,img4];

export default function Practice() {
  return (
    <div className="bg-gray-100 py-10">
      <div>
        <div className='p-10 text-center mt-20'>
          <h2 className='text-4xl font-bold'>
            Trusted by 80+ enterprises, scale-ups, and startups
          </h2>
          <p className='p-6 text-center'>
            At Techy Lads, we're honored to work alongside some of the brightest minds in tech, empowering both established giants and ambitious startups to turn their visions into reality. Our clients trust us for the expertise, innovation, and unwavering support that drive their projects forward. From scaling ideas to market-ready solutions, we partner with tech pioneers to bring groundbreaking products to life.
          </p>
        </div>
        
        <div className="w-full mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-40">
          {images.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={img}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-auto object-contain rounded-lg"
                style={{ aspectRatio: "1" }}  // Ensure images maintain a square aspect ratio
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
