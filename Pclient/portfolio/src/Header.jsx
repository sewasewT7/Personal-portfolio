import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  // Manage dark mode state with initial value from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme === "true";
  });

  // Toggle dark mode and update localStorage
  const toggleTheme = () => {
    setDarkMode((prevMode) => {
      localStorage.setItem("darkMode", !prevMode);
      return !prevMode;
    });
  };

  // Update body class based on the darkMode state
  useEffect(() => {
    const bodyClassList = document.body.classList;
    if (darkMode) {
      bodyClassList.add("dark-mode");
      bodyClassList.remove("light-mode");
    } else {
      bodyClassList.add("light-mode");
      bodyClassList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <header className="header">
      <div className="header-content">
        {/* Logo */}
        <div className="logo">
          <img src="src/assets/logo.png" alt="My Logo" />
        </div>

        {/* Navigation Links */}
        <nav className="nav-links">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/works">Work</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Theme Toggle Button */}
        <div className="theme-toggle">
          <button onClick={toggleTheme} aria-label="Toggle Theme">
            {darkMode ? "🌞 Day Mode" : "🌙 Night Mode"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
