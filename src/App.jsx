import Hero from "./pages/Hero/Hero";
import Navbar from "./pages/Navbar/Navbar";
import {Registration} from "./pages/Registration/registration"
import Contact from "./pages/ContactUs/ContactUs";
import Footer from "./pages/Footer/Footer";
import Speaker from './pages/Speakers/Speakers'
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Registration/>
      <Speaker/>
      <Contact />
      {/* <Footer/> */}
    </>
  );
};
export default App;
