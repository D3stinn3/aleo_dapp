import { useMemo } from "react";
import { WalletProvider } from "aleo-hooks";
import "./App.css";
import LandingPage from "./pages/landing/LandingPage";

import {
  PuzzleWalletAdapter,
  LeoWalletAdapter,
  FoxWalletAdapter,
  SoterWalletAdapter,
} from "aleo-adapters";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const wallets = useMemo(
    () => [
      new LeoWalletAdapter({
        appName: "Aleo app",
      }),
      new PuzzleWalletAdapter({
        programIdPermissions: {
          ["AleoMainnet"]: [
            "dApp_1.aleo",
            "dApp_1_import.aleo",
            "dApp_1_import_2.aleo",
          ],
          ["AleoTestnet"]: [
            "dApp_1_test.aleo",
            "dApp_1_test_import.aleo",
            "dApp_1_test_import_2.aleo",
          ],
        },
        appName: "Aleo app",
        appDescription: "A privacy-focused DeFi app",
        appIconUrl: "",
      }),
      new FoxWalletAdapter({
        appName: "Aleo app",
      }),
      new SoterWalletAdapter({
        appName: "Aleo app",
      }),
    ],
    []
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
          fontFamily: "'Arial', sans-serif",
        }}
      >
        <Header />
        <LandingPage />
        <Footer />
      </div>
    </WalletProvider>
  );
}

export default App;
