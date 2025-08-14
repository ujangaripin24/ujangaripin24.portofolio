import StarBackground from "./components/StarBackground";

export default function App() {
  return (
    <div style={{ height: "100vh", width: "100vw", background: "#0d010f" }}>
      <div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
        <StarBackground />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
          textAlign: "center",
          paddingTop: "40vh",
          fontFamily: "sans-serif",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          🚀 Portofolio Luar Angkasa
        </h1>
        <p style={{ fontSize: "1.2rem" }}>
          Ini background bintang bergerak dengan Three.js + React + TypeScript
        </p>
      </div>
    </div>
  );
}
