import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        .navbar {
          background-color: #ffffff;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
        }

        .navbar-container {
          width: 100%;
          padding: 0 28px;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .navbar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 64px;
        }

        .navbar-logo {
          font-size: 24px;
          font-weight: 700;
          color: #000000;
          text-decoration: none;
          margin: 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          letter-spacing: -0.02em;
        }

        .navbar-nav {
          display: flex;
          align-items: center;
          gap: 32px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .navbar-nav a {
          color: #1f2937;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          padding: 8px 12px;
          transition: color 0.2s ease;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .navbar-nav a:hover {
          color: #6b7280;
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .btn-get-in-touch {
          background-color: #e5e7eb;
          color: #1f2937;
          border: none;
          padding: 10px 24px;
          border-radius: 24px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s ease;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .btn-get-in-touch:hover {
          background-color: #d1d5db;
        }

        .btn-dropdown {
          background-color: #000000;
          color: #ffffff;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s ease;
        }

        .btn-dropdown:hover {
          background-color: #1f2937;
        }

        .dropdown-icon {
          width: 16px;
          height: 16px;
          fill: currentColor;
        }

        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 32px;
          height: 32px;
          background: none;
          border: none;
          cursor: pointer;
          gap: 6px;
        }

        .hamburger-line {
          width: 24px;
          height: 2px;
          background-color: #000000;
          transition: all 0.3s ease;
        }

        .hamburger-line.active:nth-child(1) {
          transform: rotate(45deg) translate(8px, 8px);
        }

        .hamburger-line.active:nth-child(2) {
          opacity: 0;
        }

        .hamburger-line.active:nth-child(3) {
          transform: rotate(-45deg) translate(8px, -8px);
        }

        .mobile-menu {
          display: none;
          background-color: #ffffff;
          border-top: 1px solid #e5e7eb;
          padding: 16px 0;
        }

        .mobile-menu.active {
          display: block;
          animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mobile-nav {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .mobile-nav li {
          margin: 0;
        }

        .mobile-nav a {
          display: block;
          color: #1f2937;
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
          padding: 12px 28px;
          transition: color 0.2s ease;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .mobile-nav a:hover {
          color: #6b7280;
        }

        .mobile-actions {
          padding: 16px 28px 0;
        }

        .mobile-actions .btn-get-in-touch {
          width: 100%;
          padding: 12px 24px;
        }

        /* Media Queries */
        @media (max-width: 768px) {
          .navbar-nav,
          .navbar-actions {
            display: none;
          }

          .mobile-menu-btn {
            display: flex;
          }
        }

        @media (max-width: 480px) {
          .navbar-container {
            padding: 0 20px;
          }

          .navbar-logo {
            font-size: 20px;
          }

          .mobile-nav a {
            padding: 12px 20px;
          }

          .mobile-actions {
            padding: 16px 20px 0;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-content">
            {/* Logo */}
            <h1 className="text-2xl font-bold font-orbitron text-black stroke-white">Sketch</h1>

            {/* Desktop Navigation */}
            <ul className="navbar-nav">
              <li><a href="#">What we do</a></li>
              <li><a href="#">Our work</a></li>
              <li><a href="#">Who we are</a></li>
              <li><a href="#">News & Insights</a></li>
            </ul>

            {/* Desktop Actions */}
            <div className="navbar-actions">
              <button className="btn-get-in-touch">Get in touch</button>
              <button className="btn-dropdown">
                <svg className="dropdown-icon" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-btn"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></div>
              <div className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></div>
              <div className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul className="mobile-nav">
              <li><a href="#" onClick={() => setIsMenuOpen(false)}>What we do</a></li>
              <li><a href="#" onClick={() => setIsMenuOpen(false)}>Our work</a></li>
              <li><a href="#" onClick={() => setIsMenuOpen(false)}>Who we are</a></li>
              <li><a href="#" onClick={() => setIsMenuOpen(false)}>News & Insights</a></li>
            </ul>
            <div className="mobile-actions">
              <button className="btn-get-in-touch" onClick={() => setIsMenuOpen(false)}>
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;