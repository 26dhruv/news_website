// Navbar.jsx
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext.jsx";
import "../../scss/navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/business", label: "business" },
    { href: "/technology", label: "technology" },
    { href: "/sports", label: "Sports" },
    { href: "/entertainment", label: "Entertainment" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`navbar ${isDarkMode ? "dark" : ""}`}>
      <div className="navbar__container">
        <div className="navbar__content">
          {/* Logo */}
          <div className="navbar__logo">
            <a href="/">NewsSite</a>
          </div>

          {/* Desktop Menu */}
          <div className="navbar__menu">
            {menuItems.map((item) => (
              <a key={item.label} href={item.href} className="navbar__link">
                {item.label}
              </a>
            ))}

            {/* Theme Toggle Button */}
            <button
              className="navbar__theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="navbar__icon" aria-hidden="true" />
              ) : (
                <Moon className="navbar__icon" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="navbar__mobile-controls">
            <button
              className="navbar__theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="navbar__icon" aria-hidden="true" />
              ) : (
                <Moon className="navbar__icon" aria-hidden="true" />
              )}
            </button>
            <button
              className="navbar__toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="navbar__icon" aria-hidden="true" />
              ) : (
                <Menu className="navbar__icon" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`navbar__mobile-menu ${isOpen ? "is-open" : ""}`}>
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="navbar__mobile-link"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
