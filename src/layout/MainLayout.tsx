import React from "react";
import HeaderLayout from "./HeaderLayout";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div style={{ background: "#0d010f", minHeight: "100vh", overflowX: "hidden" }}>
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
      </div>

      <div style={{ position: "relative", zIndex: 10 }}>
        <HeaderLayout />
      </div>

      <main
        style={{
          position: "relative",
          zIndex: 5,
          paddingTop: "80px",
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
