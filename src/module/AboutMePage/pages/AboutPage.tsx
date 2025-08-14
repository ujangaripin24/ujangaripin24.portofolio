import type React from "react"
import '../styles/index.css'
import { CAvatar, CCard, CCardBody, CCol, CContainer, CImage, CRow } from "@coreui/react";
import profileImage from '../../../assets/ujang.jpg'

const AboutPage: React.FC = () => {
  return (
    <section className='layout-section'>
      <CContainer className="layout-container">
        <CCard className="card-index">
          <CCardBody className="card-body">
            <CRow className="align-items-center">
              <CCol md={6} className="text-center d-none d-md-block">
                <div>
                  <CImage rounded src={profileImage}/>
                </div>
              </CCol>
              <CCol md={6}>
                <h1 className="welcome-title">TENTANG SAYA</h1>
                <p className="welcome-content">
                  Saya seorang Frontend Developer dengan pengalaman lebih dari 2 tahun bekerja dalam pengembangan aplikasi web menggunakan framework modern seperti Vue.js, React.js dan Angular. Terampil dalam mengimplementasikan desain dari Figma, memastikan desain yang responsif di semua perangkat. Pengalaman saya mencangkup state management(Redux/Vuex), integrasi RESTful API berkolaborasi dengan tim Backend, serta penerapan unit testing(Vitest/Jasmine). Saya terbiasa bekerja dalam tim menggunakan GIT sebagai version control.
                </p>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CContainer>
    </section>
  )
}

export default AboutPage