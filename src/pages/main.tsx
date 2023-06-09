import HomePage from "./home";

import { Routes, Route } from "react-router-dom";
import Nopage from "./nopage";
import Contact from "./contact";
import ContentPage from "./content";
import AboutPage from "./about";
import Nav from "../components/nav";


const MainPage = () => {
  return (
    <div className="overflow-scroll flex justify-end no-scrollbar text-slate-200  h-screen shadow-md   ">
    <Nav/>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/content" element={<ContentPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
     
    </div>
  );
};

export default MainPage;
