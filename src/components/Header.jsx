import React, { useState } from "react";
import { useSelect, useAccount, useConnect, useDisconnect } from "aleo-hooks";
import WalletModal from "./WalletModal";
import "../App.css"; // Import styles

const ConnectWalletButton = () => {
  const account = useAccount();
  const { connect, connected } = useConnect();
  const { disconnect } = useDisconnect();
  const { select } = useSelect();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWalletSelect = (walletId) => {
    const walletAdapterMap = {
      "leo-wallet": "Leo Wallet",
      "puzzle-wallet": "Puzzle Wallet",
      "fox-wallet": "Fox Wallet",
      "soter-wallet": "Soter Wallet",
    };

    const adapterId = walletAdapterMap[walletId];

    if (!adapterId) {
      console.error(`Unsupported wallet ID: ${walletId}`);
      return;
    }

    select(adapterId);
    setIsModalOpen(false);

    setTimeout(() => {
      connect(adapterId);
    }, 100);
  };

  const handleClick = () => {
    if (account?.deleted) {
      disconnect();
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <button className="connect-button" onClick={handleClick}>
        {connected ? "Disconnect Wallet" : "Connect Wallet"}
      </button>

      <WalletModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onWalletSelect={handleWalletSelect}
      />
    </>
  );
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Logo on the Left */}
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
        <span>Bu!lty Trees</span>
      </div>

      {/* Menu Button for Small Screens */}
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        ☰ Menu
      </button>

      {/* Navigation Links & Connect Wallet Button */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#roadmap">Roadmap</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Connect Wallet Button inside the dropdown */}
        <div className="connect-button-container">
          <ConnectWalletButton />
        </div>
      </nav>
    </header>
  );
};

export default Header;
