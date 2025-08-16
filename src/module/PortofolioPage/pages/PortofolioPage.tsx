import React, { useState } from 'react'
import '../styles/index.css'
import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle, CCol, CCollapse, CContainer, CRow } from '@coreui/react'
import dataPortofolio from '../../../assets/data/data-protofolio.json'

const PortofolioPage: React.FC = () => {
  const [visible, setVisible] = useState<number | null>(null)
  return (
    <CContainer className="py-5">
      <div className="text-center">
        <h1 className="portofolio-title">PORTOFOLIO SAYA</h1>
      </div>
      <div>
        <CRow className="g-4">
          {dataPortofolio.data.map((item) => (
            <CCol key={item.id} lg={6} md={12}>
              <CCard className='card-portofolio'>
                <CCardImage orientation="top" src={item.image_link} width="100%" height="300px" />
                <CCardBody className='card-body'>
                  <CCardTitle><div className="text-white">{item.nama_proyek}</div></CCardTitle>
                  <CCardText>
                    <div className="text-white">{item.teknologi.map((tech) => tech.nama_teknologi).join(', ')}</div>
                  </CCardText>
                  <CButton
                  className="space-btn"
                    onClick={() => setVisible(visible === item.id ? null : item.id)}
                  >
                    <div className="text-white">Detail Proyek</div>
                  </CButton>
                  <CCollapse visible={visible === item.id}>
                    <CCard className="mt-3">
                      <CCardBody>{item.detail_proyek}</CCardBody>
                    </CCard>
                  </CCollapse>
                </CCardBody>
              </CCard>
            </CCol>
          ))}
        </CRow>
      </div>
    </CContainer>
  )
}

export default PortofolioPage