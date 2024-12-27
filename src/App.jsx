import Hero from "./pages/Hero/Hero";
import Navbar from "./pages/Navbar/Navbar";
import {Registration} from "./pages/Registration/registration"
import Contact from "./pages/ContactUs/ContactUs";
import Footer from "./pages/Footer/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Registration/>
      <Contact />
      {/* <Footer/> */}
    </>
  );
};
export default App;
