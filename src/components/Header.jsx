import React from "react";

const Header = () => {
  return (
    <header
      style={{
        width: "100%",
        position: "fixed",
        top: "0",
        left: "0",
        background: "white",
        padding: "15px 30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        zIndex: "1000"
      }}
    >
      {/* Logo on the Left */}
      <div style={{ display: "flex", alignItems: "center", flex: "1" }}>
        <img
          src="/logo.png" // Replace with actual logo path
          alt="Logo"
          style={{ height: "40px", marginRight: "10px" }}
        />
        <span style={{ fontSize: "20px", fontWeight: "bold", color: "#333" }}>
          Bu!lty Trees
        </span>
      </div>

      {/* Navigation Links in the Center */}
      <nav style={{ flex: "2", display: "flex", justifyContent: "center" }}>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "25px",
            margin: "0",
            padding: "0"
          }}
        >
          <li><a href="#about" style={navLinkStyle}>About</a></li>
          <li><a href="#features" style={navLinkStyle}>Features</a></li>
          <li><a href="#roadmap" style={navLinkStyle}>Roadmap</a></li>
          <li><a href="#contact" style={navLinkStyle}>Contact</a></li>
        </ul>
      </nav>

      {/* Connect Wallet Button on the Right */}
      <div style={{ flex: "1", display: "flex", justifyContent: "flex-end" }}>
      <button
          style={{
            backgroundColor: "#007bff", // Green color
            color: "#fff",
            padding: "10px 15px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "bold",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#007bff"} // Darker green on hover
          onMouseOut={(e) => e.target.style.backgroundColor = "#0056b3"}
        >
        Start Bu!lty Tree
        </button>
      </div>
    </header>
  );
};

// Inline style for navigation links
const navLinkStyle = {
  textDecoration: "none",
  fontSize: "16px",
  color: "#333",
  fontWeight: "500",
  transition: "color 0.3s ease",
  cursor: "pointer"
};

export default Header;
