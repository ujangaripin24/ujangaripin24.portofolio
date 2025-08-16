import React from 'react'
import {
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardTitle,
  CCardText
} from '@coreui/react'
import '../styles/index.css'
import experienceData from '../../../assets/data/data-work-expreince.json'

export const WorkExperiencePage: React.FC = () => {
  return (
    <CContainer className="experience-container">
      <h1 className="neon-title text-center mb-4">Pengalaman Kerja</h1>
      <CRow className="g-4 justify-content-center">
        {experienceData.data.map((exp) => (
          <CCol key={exp.id} md={6} lg={4}>
            <CCard className="experience-card h-100">
              <CCardBody>
                <CCardTitle><div className="neon-subtitle">{exp.perusahaan}</div></CCardTitle>
                <h6 className="posisi">{exp.posisi}</h6>
                <h6 className="tahun">{exp.tahun}</h6>
                <CCardText className="deskripsi">{exp.deskripsi}</CCardText>
              </CCardBody>
            </CCard>
          </CCol>
        ))}
      </CRow>
    </CContainer>
  )
}

export default WorkExperiencePage;