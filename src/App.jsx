import React from "react";
import './index.css';
import AboutUs from "./pages/About/AboutUs";
import Contact from "./pages/ContactUs/ContactUs";
import Hero from "./pages/Hero/Hero";
import Navbar from "./pages/Navbar/Navbar";
import { Registration } from "./pages/Registration/registration";
import Speaker from "./pages/Speakers/Speakers";
import Workshops from "./pages/Workshops/Workshops";
// import Footer from "./pages/Footer/Footer"; // Uncomment if needed

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Registration />
      <Speaker />
      <Workshops />
      <Contact />
      {/* <Footer /> */}
      <div className="text-red-800 text-4xl"></div>
      <AboutUs />  {/* Add the AboutUs component here */}
    </>
  );
};

export default App;
