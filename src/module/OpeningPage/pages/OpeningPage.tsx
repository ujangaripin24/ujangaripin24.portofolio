import React from 'react'
import '../styles/index.css'
import { CCol, CContainer, CRow } from "@coreui/react";

const OpeningPage: React.FC = () => {
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
            </CCol>
            <CCol md={6} className="text-center">
              <img 
                src="https://via.placeholder.com/500x400/2980b9/ffffff?text=WELCOME" 
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