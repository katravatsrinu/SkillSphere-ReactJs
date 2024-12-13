import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LanguageCurrencyBox from "../LanguageCurrencyBox";
import CategoryList from "../Category";  // New component for categories
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState(false);
  const [openBox, setOpenBox] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [loggedInUser, setLoggedInUser] = useState(null); 
  const [menuOpen, setMenuOpen] = useState(false);  // To toggle the mobile menu
  const [showCategories, setShowCategories] = useState(false); // To toggle categories
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  // Handle language change
  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setOpenBox(false);
  };

  // Check if user is logged in and set the username
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      setLoggedInUser(userData.username);
    }
  }, []);

  // Toggle Categories Visibility
  const handleCategoryClick = () => {
    setShowCategories((prev) => !prev);
  };

  // Logout Functionality
  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("userData");
    // Reset state
    setLoggedInUser(null);
    // Optionally, redirect to home or login page
    navigate("/login");
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">SkillSphere</span>
          </Link>
          <span className="dot">.</span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Navbar links that show when the menu is open */}
        <div className={`links ${menuOpen ? "open" : ""}`}>
          <span onClick={() => setOpenBox(true)}>{selectedLanguage}</span>
          <Link className="link" to="/pro">
            <span>SkillSphere Pro</span>
          </Link>
          
          {loggedInUser ? (
            <>
              <span>{loggedInUser}</span>
              <button onClick={handleLogout} className="logout-btn">Logout</button> {/* Logout button */}
            </>
          ) : (
            <>
              <span onClick={() => navigate("/login")}>Log in</span>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}

          {/* Category Click */}
          <span onClick={handleCategoryClick}>Categories</span>
          
          {/* Language Box */}
          {openBox && <LanguageCurrencyBox onSelectLanguage={handleLanguageSelect} closeBox={() => setOpenBox(false)} />}
        </div>
      </div>

      {/* Conditional display of categories */}
      {showCategories && <CategoryList />}
    </div>
  );
}

export default Navbar;
