import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        textAlign: "center",
        padding: "15px",
        background: "#f8f9fa",
        color: "#333",
        fontSize: "14px",
        fontFamily: "'Arial', sans-serif",
        position: "fixed",
        bottom: "0",
        left: "0",
        zIndex: "1000"
      }}
    >
      © {new Date().getFullYear()} Bu!lty Trees. All Rights Reserved.
    </footer>
  );
};

export default Footer;
