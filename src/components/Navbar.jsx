import React, { useState, useEffect, useRef } from "react";
import "../styles/Navbar.css";
import companyLogo from "../../assets/companyLogo.svg";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import SignInForm from './SignInForm';
import SignUpForm from "./SignUpForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import Cart from "./Cart";
import { useSelector } from 'react-redux';

function Navbar({ handleNavigation, translateX }) {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showCart, setShowCart] = useState(false); // State to manage the visibility of the cart modal

  const mobileMenuRef = useRef(null);
  const itemCount = useSelector(state => state.cart.itemCount);

  useEffect(() => {
    function handleClickOutside(event) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setShowMobileMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuRef]);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  const handleClose =() => {
    setShowMobileMenu(false);

  }

  const openSignIn = () => {
    setShowSignIn(true);
  };

  const closeSignIn = () => {
    setShowSignIn(false);
  };

  const openSignUp = () => {
    setShowSignUp(true);
  };

  const closeSignUp = () => {
    setShowSignUp(false);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div id="navbar-container" className="navbar-flex">
      <div className="nav-content">
        <div className="company-logo">
          <img src={companyLogo} alt="company logo" width="70vw" height="40em" />
          <h1>
            <span style={{ color: "white" }}>Seven</span>
            <span style={{ color: "#9d174d" }}>Stones</span>
          </h1>
        </div>
        <div className="nav-buttons">
          <button onClick={() => handleNavigation(0)} className="nav-button">
            Home
          </button>
          <button onClick={() => handleNavigation(-100)} className="nav-button">
            About Us
          </button>
          <button onClick={() => handleNavigation(-200)} className="nav-button">
            Contact Us
          </button>
        </div>
      </div>

      <div className="burger-menu" onClick={toggleMobileMenu}>
        <div className="burger-line" />
        <div className="burger-line" />
        <div className="burger-line" />
      </div>

      <motion.div
        ref={mobileMenuRef}
        className="mobile-menu"
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: showMobileMenu ? 1 : 0, x: showMobileMenu ? "0%" : "-100%" }}
        transition={{ duration: 0.5 }}
      >
        <ul className="nav-buttons-small">
          <li onClick={() => handleNavigation(0)} className="nav-link">
            Home
          </li>
          <li onClick={() => handleNavigation(-100)} className="nav-link about">
            About Us
          </li>
          <li onClick={() => handleNavigation(-200)} className="nav-link contact">
            Contact Us
          </li>
          <li className="nav-link">
            <Link to="/about" className="nav-linkS">About</Link>
          </li>
          <li className="nav-link">
            <Link to="/contact" className="nav-linkS">Contact</Link>
          </li>
        </ul>
        {/* sign up and login */}
        <div style={{display:"flex"}}>
          <button id="sign-upS" onClick={openSignUp}>
            Sign up
          </button>
          <button id="sign-inS" onClick={openSignIn}>
            Sign In
          </button>
        </div>
      </motion.div>

      <div id="signin-cart">
        <div>
          {showSignIn && <SignInForm closeSignIn={closeSignIn} />}
        </div>
        <div>
          {showSignUp && <SignUpForm closeSignUp={closeSignUp} />}
        </div>
      </div>
      
      <div style={{display:"flex"}} className="auth-button">
        <button id="sign-up" onClick={openSignUp}>
          Sign up
        </button>
        <button id="sign-in" onClick={openSignIn}>
          Sign In
        </button>
      </div>

      <div className="basket-icon" onClick={toggleCart}>
      <FontAwesomeIcon icon={faShoppingBasket}  />
        {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
        </div>

      {/* Cart modal */}
      <motion.div
        className="cart-modal"
        initial={{ opacity: 0, y: '-100%' }}
        animate={{ opacity: showCart ? 1 : 0, y: showCart ? '0%' : '-100%' }}
        transition={{ duration: 0.5 }}
      >
        {showCart && <Cart handleClose={handleClose} />} {/* Render the Cart component when showCart is true */}
      </motion.div>
    </div>
  );
}

export default Navbar;
