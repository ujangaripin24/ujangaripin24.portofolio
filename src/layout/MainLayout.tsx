import React from "react";
import HeaderLayout from "./HeaderLayout";
import StarBackground from "../components/StarBackground";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div style={{ background: "#0d010f", minHeight: "100vh", overflowX: "hidden"}}>
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <StarBackground />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <HeaderLayout />
        <main style={{ paddingTop: "0px" }}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
