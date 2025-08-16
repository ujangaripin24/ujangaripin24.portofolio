import React from 'react'
import { motion } from "framer-motion"
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <p className="welcome-subtitle">Hai, Selamat Datang</p>
              <p className="welcome-title">Saya Ujang Aripin</p>
              <p className="welcome-content">
                Saya adalah seroang Software Developer dengan keahlian dalam pengembangan aplikasi berbasis website dan mobile serta saya juga seorang Linux Enthusiast.
              </p>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ display: "inline-block", margin: "4px" }}
              >
                <CButton onClick={handleDownload} className="space-btn text-white">
                  🚀 Download PDF
                </CButton>
              </motion.div>
            </motion.div>
          </CCol>

          <CCol md={6} className="text-center d-none d-md-block">
            <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}>
              <img
                src={SideImage}
                alt="Welcome"
                className="welcome-image"
              />
            </motion.div>
          </CCol>
        </CRow>
      </CContainer>
    </section>
  )
}

export default OpeningPage