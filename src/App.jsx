// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/styles/App.css";
import Body from "./components/Body";
import CustomerBoard from "./components/CustomerBoard";
import About from "./components/About";
import Contact from "./components/ContactUs";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
        <Route path="/about" element={<About />} /> {/* Use the 'element' prop to specify the component */}
        <Route path="/contact" element={<Contact />} />

          <Route path="/" element={<Body className="fadeIn" />} />
          <Route path="/customer-board" element={<CustomerBoard />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
