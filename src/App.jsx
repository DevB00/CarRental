import About from "./scenes/AboutPage";
import Home from "./scenes/HomePage";
import Navbar from "../src/scenes/Navbar";
import { Route, Routes } from "react-router-dom";
import Models from "./scenes/ModelsPage";
import TestimonialsPage from "./scenes/TestimonialsPage";
import Team from "./scenes/TeamPage";
import Contact from "./scenes/ContactPage";
import './styles/index.scss';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="models" element={<Models />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;