import { CAvatar } from "@coreui/react";
import React from "react";

const HeaderLayout: React.FC = () => {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(13, 1, 15, 0.4)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <div className="container">
        <a className="navbar-brand text-white fw-bold" href="#home">
          Ujang Aripin
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ filter: "invert(1)" }}></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-white" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#work">
                Work Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#education">
                Education
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>


  );
};

export default HeaderLayout;
