import type React from "react"
import '../styles/index.css'
import { CButton, CCard, CCardBody, CCol, CContainer, CImage, CRow } from "@coreui/react";
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
                  <CImage rounded src={profileImage} />
                </div>
              </CCol>
              <CCol md={6}>
                <div>
                  <h1 className="about-title">TENTANG SAYA</h1>
                </div>
                <div>
                  <CRow>
                    <CCol>
                      <div>
                        <div><p className="about-subtitle">Nama: Ujang Aripin</p></div>
                        <div><p className="about-subtitle">Pendidikan: Strata 1</p></div>
                        <div><p className="about-subtitle">Email: ujangarifin06@gmail.com</p></div>
                      </div>
                    </CCol>
                    <CCol>
                      <div>
                        <div><p className="about-subtitle">Nomor Telepon: 0859-5983-4070</p></div>
                        <div><p className="about-subtitle">Domisili: Kota Bandung dan Jabodetabek</p></div>
                      </div>
                      </CCol>
                  </CRow>
                </div>
                <div style={{justifyContent: 'space-between', display: 'flex'}}>
                  <CButton className="space-btn text-white">🚀 WhatsApp</CButton>
                  <CButton className="space-btn text-white">🚀 Facebook</CButton>
                  <CButton className="space-btn text-white">🚀 Instagram</CButton>
                  <CButton className="space-btn text-white">🚀 LinkedIn</CButton>
                  <CButton className="space-btn text-white">🚀 Gmail</CButton>
                </div>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CContainer>
    </section>
  )
}

export default AboutPage