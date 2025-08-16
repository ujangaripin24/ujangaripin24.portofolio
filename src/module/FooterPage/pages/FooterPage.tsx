import React from 'react'
import { CContainer, CRow, CCol } from '@coreui/react'
import '../styles/index.css'

const FooterPage: React.FC = () => {
  return (
    <footer className="space-footer">
      <CContainer>
        <CRow className="footer-row">
          <CCol md={4} sm={12} className="footer-section">
            <h5 className="footer-title">Kontak</h5>
            <p className="footer-text">Email: ujang@example.com</p>
            <p className="footer-text">GitHub: github.com/ujang</p>
            <p className="footer-text">LinkedIn: linkedin.com/in/ujang</p>
          </CCol>
        </CRow>
        <div className="footer-bottom text-center mt-4">
          <p>&copy; {new Date().getFullYear()} Ujang Aripin.</p>
        </div>
      </CContainer>
    </footer>
  )
}

export default FooterPage;