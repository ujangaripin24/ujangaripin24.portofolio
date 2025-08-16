import React, { useState } from 'react'
import '../styles/index.css'
import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle, CCol, CCollapse, CContainer, CRow } from '@coreui/react'
import dataPortofolio from '../../../assets/data/data-protofolio.json'

const PortofolioPage: React.FC = () => {
  const [visible, setVisible] = useState<number | null>(null)
  return (
      <CContainer>
        <div className="text-center">
          <h1 className="portofolio-title">PORTOFOLIO SAYA</h1>
        </div>
        <div>
          <CRow className="g-4">
            {dataPortofolio.data.map((item) => (
              <CCol key={item.id} lg={6} md={12}>
                <CCard style={{ width: '100%' }}>
                  <CCardImage orientation="top" src={item.image_link} />
                  <CCardBody>
                    <CCardTitle>{item.nama_proyek}</CCardTitle>
                    <CCardText>
                      {item.teknologi.map((tech) => tech.nama_teknologi).join(', ')}
                    </CCardText>
                    <CButton
                      color="primary"
                      onClick={() => setVisible(visible === item.id ? null : item.id)}
                    >
                      Detail Proyek
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