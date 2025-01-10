import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Updates.css";
import wave from "../../assets/green wave 3.jpg";
import { Navigation } from "swiper/modules";
import UpdateImage3 from "../../assets/UpdateImage3.jpg";
import UpdateImage2 from "../../assets/UpdateImage2.jpg";
import UpdateImage1 from "../../assets/UpdateImage1.jpg";
import UpdateImage4 from "../../assets/UpdateImage4.jpg";
import UpdateImage5 from "../../assets/UpdateImage5.jpg";
import UpdateImage6 from "../../assets/UpdateImage6.jpg";


const Updates = () => {
  const images = [
    UpdateImage6,
    UpdateImage5,
    UpdateImage4,
    UpdateImage3,
    UpdateImage2,
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
