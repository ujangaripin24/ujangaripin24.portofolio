import { CCard, CCardBody, CCardTitle, CCol, CContainer, CRow } from '@coreui/react'
import React from 'react'
import educationData from '../../../assets/data/education-data.json'
import '../styles/index.css'

export const EducationalPage: React.FC = () => {
  return (
    <div className="educational-container">
      <CContainer className="text-white py-5">
        <h1 className="text-center mb-5 neon-text">Riwayat Pendidikan</h1>
        <CRow className="g-4 justify-content-center">
          {educationData.data.map((item) => (
            <CCol key={item.id} md={6} lg={4}>
              <CCard className="education-card">
                <CCardBody>
                  <CCardTitle><div className="neon-subtitle">{item.sekolah}</div></CCardTitle>
                  <h6 className="tahun">{item.tahun}</h6>
                  <h6 className="jurusan">{item.jurusan}</h6>
                </CCardBody>
              </CCard>
            </CCol>
          ))}
        </CRow>
      </CContainer>
    </div>
  )
}
