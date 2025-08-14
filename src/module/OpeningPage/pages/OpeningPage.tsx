import React from 'react'
import '../styles/index.css'
import { CButton, CCol, CContainer, CRow } from "@coreui/react";
import SideImage from '../../../assets/side-image.png'

const OpeningPage: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/docs/resume.pdf";
    link.download = "resume.pdf";
    link.click();
  };
  return (
    <section className='layout-section'>
      <section className="layout-section layout-first">
        <CContainer className="layout-container">
          <CRow className="align-items-center">
            <CCol md={6}>
              <h2 className="welcome-subtitle">Hai, Selamat Datang</h2>
              <h1 className="welcome-title">UJANG ARIPIN</h1>
              <p className="welcome-content">
                Software Developer | Linux Enthusiast
              </p>
              <CButton onClick={handleDownload} className="space-btn text-white">
                🚀 Download PDF
              </CButton>
            </CCol>
            <CCol md={6} className="text-center">
              <img
                src={SideImage}
                alt="Welcome"
                className="welcome-image"
              />
            </CCol>
          </CRow>
        </CContainer>
      </section>
    </section>
  )
}

export default OpeningPage