import React from "react";
import './index.css';
import AboutUs from "./pages/About/AboutUs";

const App = () => {
  return (
    <div>
      <div className="text-red-800 text-4xl">App</div>
      <AboutUs />  {/* Add the AboutUs component here */}
    </div>
  );
}

export default App;
