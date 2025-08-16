import React from 'react'
import { CContainer, CRow, CCol } from '@coreui/react'
import '../styles/index.css'

const FooterPage: React.FC = () => {
  return (
    <footer className="space-footer">
      <CContainer>
        <CRow className="footer-row">
          <CCol md={4} sm={12} className="footer-section">
            <h5 className="footer-title">Tentang Saya</h5>
            <p className="footer-text">
              Developer yang suka membangun aplikasi dengan teknologi modern,
              sambil menjelajah ide-ide kreatif seperti menjelajah galaksi 🚀
            </p>
          </CCol>

          <CCol md={4} sm={12} className="footer-section text-center">
            <h5 className="footer-title">Navigasi</h5>
            <ul className="footer-links">
              <li><a href="/">Beranda</a></li>
              <li><a href="/portofolio">Portofolio</a></li>
              <li><a href="/pengalaman">Pengalaman</a></li>
              <li><a href="/kontak">Kontak</a></li>
            </ul>
          </CCol>

          <CCol md={4} sm={12} className="footer-section text-md-end text-center">
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