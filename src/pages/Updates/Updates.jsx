import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Updates.css";
import wave from "../../assets/green wave 3.jpg";
import UpdateImage1 from "../../assets/AI imageGen.jpg";
import { Navigation } from "swiper/modules";

const Updates = () => {
  const images = [
    UpdateImage1,
    
  ];
  return (
    <div className="updates-page">
      
      <div className="green-wave-container">
        <img src={wave} alt="Wave" className="green-wave" />
        <h2 className="workshop-heading">Updates</h2>
        <span className="loaderUpdate"></span>
      </div>

      {/* Swiper Carousel */}
      <div className="carousel-container">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          slidesPerView={1} // Default for larger screens
          spaceBetween={20}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 3, // Show 1 image for screens 768px and smaller
              spaceBetween: 10, // Reduce space between images for smaller screens
            },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Poster ${index + 1}`}
                className="carousel-image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      
      <img
        src={wave}
        alt="Green Wave"
        className="green-wave-btm"
      />
    </div>
  );
};

export default Updates;
