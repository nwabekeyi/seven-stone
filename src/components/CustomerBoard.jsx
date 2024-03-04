import React, { useState, useEffect } from "react";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import CustomerNav from "./CustomerNav"; 
import Home from "./Home";
import Footer from "./Footer";
import "../styles/Body.css";

function CustomerBoard() {
  const [translate, setTranslate] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setTranslate(-100); // Translate to the top by 100vw
      } else {
        setTranslate(0); // Reset translation
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize once on component mount
    handleResize();

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavigation = (translation) => {
    setTranslate(translation);
  };

  return (
    <div className="body" style={{ zIndex: "-100" }}>
      <CustomerNav handleNavigation={handleNavigation} translateX={translate} />
      <div
        style={{
          transform: window.innerWidth < 768 ? `translateY(${translate}vw)` : `translateX(${translate}vw)`,          
          marginTop: "85px", // Corrected capitalization
          transition: "transform 2s ease",
        }}
        id="body-container"
      >
        <Home />
        <div className="no-show">
        <AboutUs />
        <ContactUs />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CustomerBoard;
