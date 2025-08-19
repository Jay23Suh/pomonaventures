import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./ComponentsPV/Header";
import Footer from "./ComponentsPV/Footer";
import Home from "./ComponentsPV/Home";
import SageTank from "./ComponentsPV/SageTank";
import Contacts from "./ComponentsPV/contacts";
import About from "./ComponentsPV/Aboutus";
import Initiatives from "./ComponentsPV/Initiatives";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#ea6c55] to-[#2873b3]">
        <Header />

        <main className="flex-1 pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sagetank" element={<SageTank />} />
            <Route path="/contacts" element={<Contacts />} />
             <Route path="/Aboutus" element={<About />} />
            <Route path="/Initiatives" element={<Initiatives />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
