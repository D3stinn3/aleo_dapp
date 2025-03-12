import React from "react";

const LandingPage = () => {
  return (
    <main
      style={{
        maxWidth: "600px",
        padding: "40px",
        background: "white",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Logo */}
      <img
        src="/logo.png"
        alt="Logo"
        style={{ width: "100px", height: "100px", marginBottom: "20px" }}
      />

      {/* Main Heading */}
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          color: "#333",
          marginBottom: "10px",
        }}
      >
        Welcome to <span style={{ color: "#007bff" }}>Bu!lty Trees</span>
      </h1>

      {/* Subtitle */}
      <p style={{ fontSize: "18px", color: "#555", marginBottom: "20px" }}>
        The family snapshot.
      </p>

      {/* Start Bu!lty Tree Button */}
      <button
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          padding: "10px 15px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: "bold",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#007bff")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#0056b3")}
      >
        Start Bu!lty Tree
      </button>

      {/* Footer Text */}
      <div style={{ marginTop: "20px", fontSize: "14px", color: "#777" }}>
        <p>Powered by Aleo & ZKPass • Built for the Future</p>
      </div>
    </main>
  );
};

export default LandingPage;
