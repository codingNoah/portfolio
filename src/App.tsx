import MainLayout from "./layouts/MainLayout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const delay = 500; // .5 second delay
    const timerId = setTimeout(() => {
      AOS.init({
        duration: 700,
        once: true,
      });
    }, delay);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
