import React, { useState } from 'react'
import {
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardTitle,
  CCollapse,
  CButton
} from '@coreui/react'
import '../styles/index.css'
import experienceData from '../../../assets/data/data-work-expreince.json'

export const WorkExperiencePage: React.FC = () => {
  const [visible, setVisible] = useState<number | null>(null)
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
                <CButton
                  className='space-btn text-white'
                  onClick={() => setVisible(visible === exp.id ? null : exp.id)}
                >
                  Detail Pekerjaan
                </CButton>
                <CCollapse visible={visible === exp.id}>
                  <CCard className="mt-3">
                    <CCardBody><p>{exp.deskripsi}</p></CCardBody>
                  </CCard>
                </CCollapse>
              </CCardBody>
            </CCard>
          </CCol>
        ))}
      </CRow>
    </CContainer>
  )
}

export default WorkExperiencePage;