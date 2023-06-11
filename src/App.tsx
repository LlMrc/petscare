import Nav from "./components/nav";
import AboutPage from "./pages/about";
import Contact from "./components/contact";

import HomePage from "./pages/home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nopage from "./pages/nopage";
import CarousselSlide from "./pages/preview";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="overflow-scroll flex justify-end no-scrollbar text-slate-200  h-screen ">
          <Nav />
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/content" element={<CarousselSlide />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Nopage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
