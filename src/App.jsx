import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./Component/Navbar";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Resume from "./pages/Resume";



export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
    
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resume" element={<Resume />} />
       
      </Routes>
    </BrowserRouter>
  );
}
