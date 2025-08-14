import React from 'react'
import { CCol, CContainer, CRow } from "@coreui/react";
import '../styles/index.css'

const MySkillPage: React.FC = () => {
  return (
    <section className='layout-section'>
      <CContainer className="layout-container">
        <div className='skill-layout'>
          <div>
            <div className='skill-subtitle'>Frontend</div>
            <div>Framework</div>
          </div>
          <div>
            <div className='skill-subtitle'>State Management & Unit Testing</div>
            <div>
              <CRow>
                <CCol>1</CCol>
                <CCol>2</CCol>
                <CCol>3</CCol>
                <CCol>4</CCol>
              </CRow>
            </div>
          </div>
          <div>
            <div className='skill-subtitle'>Backend</div>
            <div>Framework</div>
          </div>
          <div>
            <div className='skill-subtitle'>Database</div>
            <div>Framework</div>
          </div>
          <div>
            <div className='skill-subtitle'>Mobile & Hybrid</div>
            <div>Framework</div>
          </div>
          <div>
            <div className='skill-subtitle'>Cloud Service & CI/CD</div>
            <div>Framework</div>
          </div>
          <div>
            <div className='skill-subtitle'>Tools & Teknologi</div>
            <div>Framework</div>
          </div>
        </div>
      </CContainer>
    </section>
  )
}

export default MySkillPage