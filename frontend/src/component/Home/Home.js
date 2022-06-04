import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Header from "./Header";
import "./Homestyle.css";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home_div1" style={{"height": "17cm"}}>
        <div className="home_div2">RESEARCH PROJECT MANAGEMENT TOOL</div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
