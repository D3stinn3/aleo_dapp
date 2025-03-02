import { useMemo, useState } from "react";
import { useSelect, WalletProvider, useAccount, useConnect, useDisconnect, useRecords } from "aleo-hooks";
import WalletModal from "./components/WalletModal";
import './App.css';

import {
  PuzzleWalletAdapter,
  LeoWalletAdapter,
  FoxWalletAdapter,
  SoterWalletAdapter,
  configureConnectionForPuzzle
} from 'aleo-adapters';
import Header from "./components/Header";
import Footer from "./components/Footer";

function ConnectWalletButton() {
  const account = useAccount();
  const { connect, address, connected, connecting, error } = useConnect();
  const { disconnect } = useDisconnect();
  const { select } = useSelect();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWalletSelect = (walletId) => {
    const walletAdapterMap = {
      'leo-wallet': 'Leo Wallet',
      'puzzle-wallet': 'Puzzle Wallet',
      'fox-wallet': 'Fox Wallet',
      'soter-wallet': 'Soter Wallet',
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

  function Header() {
    return (
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-900">
          Aleo App
        </div>
        <nav className="hidden md:flex space-x-4"></nav>
        <ConnectWalletButton/>
      </header>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button
        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
        onClick={handleClick}
        style={{
          backgroundColor: "#007bff",  // Blue color
          color: "#fff",               // White text
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "1rem",
          fontWeight: "bold",
          transition: "background-color 0.3s ease",
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = "#007bff"}  // Hover effect
      onMouseOut={(e) => e.target.style.backgroundColor = "#0056b3"}
      >
        {connected ? 'Disconnect Wallet' : 'Connect Wallet'}
      </button>

      <WalletModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onWalletSelect={handleWalletSelect}
      />
    </div>
  );
} 

function App() {
  const wallets = useMemo(
    () => [
      new LeoWalletAdapter({
        appName: 'Aleo app',
      }),
      new PuzzleWalletAdapter({
        programIdPermissions: {
          ['AleoMainnet']: ['dApp_1.aleo', 'dApp_1_import.aleo', 'dApp_1_import_2.aleo'],
          ['AleoTestnet']: ['dApp_1_test.aleo', 'dApp_1_test_import.aleo', 'dApp_1_test_import_2.aleo']
        },
        appName: 'Aleo app',
        appDescription: 'A privacy-focused DeFi app',
        appIconUrl: ''
      }),
      new FoxWalletAdapter({
        appName: 'Aleo app',
      }),
      new SoterWalletAdapter({
        appName: 'Aleo app',
      })
    ],
    [],
  );

  return (
    <WalletProvider wallets={wallets} autoConnect>
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      background: "linear-gradient(135deg, #e0f7fa, #fce4ec)",
      padding: "20px",
      fontFamily: "'Arial', sans-serif"
    }}
  >
    <Header/>
    <main style={{ maxWidth: "600px", padding: "40px", background: "white", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
      {/* Logo */}
      <img 
        src="/logo.png"  // Replace with actual logo path
        alt="Logo"
        style={{ width: "100px", height: "100px", marginBottom: "20px" }}
      />

      {/* Main Heading */}
      <h1 style={{ fontSize: "32px", fontWeight: "bold", color: "#333", marginBottom: "10px" }}>
        Welcome to <span style={{ color: "#007bff" }}>Bu!lty Trees</span>
      </h1>

      {/* Subtitle */}
      <p style={{ fontSize: "18px", color: "#555", marginBottom: "20px" }}>
        The family snapshot.
      </p>

      {/* Connect Wallet Button */}
      <ConnectWalletButton />

      {/* Footer Text */}
      <div style={{ marginTop: "20px", fontSize: "14px", color: "#777" }}>
        <p>Powered by aleo & zk • Built for the Future</p>
      </div>
    </main>
    {/* Footer Component */}
    <Footer />
  </div>
</WalletProvider>

  );
}

export default App;
