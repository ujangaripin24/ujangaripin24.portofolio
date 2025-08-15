import React from 'react'
import '../styles/index.css'
import { CButton, CCol, CContainer, CRow } from "@coreui/react";
import SideImage from '../../../assets/side-image.webp'

const OpeningPage: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/docs/resume.pdf";
    link.download = "resume.pdf";
    link.click();
  };
  return (
    <section className='layout-section'>
      <CContainer className="layout-container">
        <CRow className="align-items-center">
          <CCol md={6}>
            <p className="welcome-subtitle">Hai, Selamat Datang</p>
            <p className="welcome-title">Saya Ujang Aripin</p>
            <p className="welcome-content">
              Saya adalah seroang Software Developer dengan keahlian dalam pengembangan aplikasi berbasis website dan mobile serta saya juga seorang Linux Enthusiast.
            </p>
            <CButton onClick={handleDownload} className="space-btn text-white">
              🚀 Download PDF
            </CButton>
          </CCol>
          <CCol md={6} className="text-center d-none d-md-block">
            <img
              src={SideImage}
              alt="Welcome"
              className="welcome-image"
            />
          </CCol>
        </CRow>
      </CContainer>
    </section>
  )
}

export default OpeningPage