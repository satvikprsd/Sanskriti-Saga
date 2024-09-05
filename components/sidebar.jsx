// Sidebar.jsx
import React from 'react';
import '@/app/css/additional-styles/sidebar.css'; // Ensure you have this CSS file for styling

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const handleLinkClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    toggleSidebar(); // Close the sidebar after clicking
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    toggleSidebar(); // Optionally close the sidebar after clicking
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleSidebar}>X</button>
      <nav className="sidebar-nav">
        <ul>
            <li><a href="#home" onClick={scrollToTop}>Home</a></li>
          <li><a href="#Video" onClick={(e) => handleLinkClick(e, 'hero')}>Video</a></li>
          <li><a href="#features" onClick={(e) => handleLinkClick(e, 'features')}>Features</a></li>
          <li><a href="#zigzag" onClick={(e) => handleLinkClick(e, 'zigzag')}>ZigZag</a></li>
          <li><a href="#testimonials" onClick={(e) => handleLinkClick(e, 'testimonials')}>Testimonials</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
