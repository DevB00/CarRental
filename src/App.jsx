import About from "./pages/AboutPage";
import Home from "./pages/HomePage";
import Navbar from "../src/pages/Navbar";
import { Route, Routes } from "react-router-dom";
import Models from "./pages/ModelsPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import Team from "./pages/TeamPage";
import Contact from "./pages/ContactPage";
import Footer from "./pages/Footer";
function App() {
  return (
    <div>
      <Navbar  />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="models" element={<Models />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;