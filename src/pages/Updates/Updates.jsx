import React, { useEffect, useState } from "react";
import "./Updates.css";

const Updates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://picsum.photos/id/237/200/300', // Replace with actual image paths
    'https://picsum.photos/seed/picsum/200/300',
    'https://picsum.photos/200/300?grayscale0',
    'https://picsum.photos/200/300/?blur',
    'https://picsum.photos/200/300.jpg',
  ];

  const totalImages = images.length;

  // Function to move to the next set of images
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  // Function to move to the previous set of images
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + totalImages) % totalImages
    );
  };

  // Auto-move images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  // Helper function to determine image class
  const getImageClass = (index) => {
    if (index === currentIndex) return "active";
    if (index === (currentIndex - 1 + totalImages) % totalImages) return "prev";
    if (index === (currentIndex + 1) % totalImages) return "next";
    return "hidden";
  };

  return (
    <div className="updates-page">
      {/* Green Wave Image */}
     <div className="green-wave-container">
             <img src="src/assets/green wave 3.jpg" alt="Wave" className="green-wave" />
             <h2 className="workshop-heading">updates</h2>
           </div>

      {/* Banner Container */}
      <div className="banner-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Banner ${index + 1}`}
            className={`banner-image ${getImageClass(index)}`}
          />
        ))}
      
        {/* Navigation Buttons */}
        <button className="nav-button left" onClick={prevImage}>
          &#9664; {/* Left arrow */}
        </button>
        <button className="nav-button right" onClick={nextImage}>
          &#9654; {/* Right arrow */}
        </button>
        
      </div>

      {/* Green Wave Image down*/}
      <img
        src="src/assets/green wave 3.jpg" // Replace with your green wave image
        alt="Green Wave"
        className="green-wave-btm"
      />
    </div>
  );
};

export default Updates;









