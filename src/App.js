import React from "react";
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Featured from "./components/featured";
import Signup from "./components/Signup";
import Footer from "./components/Footer";



function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Featured/>
      <Signup/>
      <Footer/>
    </div>
  );
}

export default App;
