import type React from "react"
import '../styles/index.css'
import { CButton, CCard, CCardBody, CCol, CContainer, CImage, CRow } from "@coreui/react";
import profileImage from '../../../assets/ujang.webp'

const AboutPage: React.FC = () => {
  return (
    <CContainer >
      <div className="text-center">
        <h1 className="about-title">TENTANG SAYA</h1>
      </div>
      <CCard className="card-index">
        <CCardBody className="card-body">
          <CRow className="align-items-center">
            <CCol md={6} className="text-center d-none d-md-block">
              <div>
                <CImage rounded loading='lazy' src={profileImage} />
              </div>
            </CCol>
            <CCol md={6}>
              <div>
                <h1 className="about-subtitle">Dengan pengalaman lebih dari 2 tahun bekerja dalam pengembangan aplikasi web menggunakan framework modern seperti Vue.js, React.js dan Angular. Terampil dalam mengimplementasikan desain dari Figma, memastikan desain yang responsif di semua perangkat. Pengalaman saya mencangkup state management(Redux/Vuex), integrasi RESTful API berkolaborasi dengan tim Backend, serta penerapan unit testing(Vitest/Jasmine). Saya terbiasa bekerja dalam tim menggunakan GIT sebagai version control.</h1>
              </div>
              <div>
                <CRow>
                  <CCol>
                    <div>
                      <div><p className="about-subtitle-bio">Nama: Ujang Aripin</p></div>
                      <div><p className="about-subtitle-bio">Pendidikan: Strata 1</p></div>
                      <div><p className="about-subtitle-bio">Email: ujangarifin06@gmail.com</p></div>
                    </div>
                  </CCol>
                  <CCol>
                    <div>
                      <div><p className="about-subtitle-bio">Nomor Telepon: 0859-5983-4070</p></div>
                      <div><p className="about-subtitle-bio">Domisili: Kota Bandung dan Jabodetabek</p></div>
                    </div>
                  </CCol>
                </CRow>
              </div>
              <div className="about-contact">
                <CButton className="about-contact space-btn text-white">🚀 WhatsApp</CButton>
                <CButton className="about-contact space-btn text-white">🚀 Facebook</CButton>
                <CButton className="about-contact space-btn text-white">🚀 Instagram</CButton>
                <CButton className="about-contact space-btn text-white">🚀 LinkedIn</CButton>
                <CButton className="about-contact space-btn text-white">🚀 Gmail</CButton>
              </div>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </CContainer>
  )
}

export default AboutPage