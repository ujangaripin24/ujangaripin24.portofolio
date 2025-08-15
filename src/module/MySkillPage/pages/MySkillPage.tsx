import React from 'react'
import { CCol, CContainer, CImage, CRow } from "@coreui/react";
import '../styles/index.css'
import VueIcon from '../../../assets/icon/Vue.svg'
import ReactIcon from '../../../assets/icon/React.svg'
import AngularIcon from '../../../assets/icon/Angular.svg'
import NextjsIcon from '../../../assets/icon/Next.svg'

const MySkillPage: React.FC = () => {
  return (
    <section className='layout-section'>
      <CContainer className="layout-container">
        <div className="text-center">
          <h1 className="about-title">KETERAMPILAN SAYA</h1>
        </div>
        <div className='skill-layout'>
          <div>
            <div className='skill-subtitle text-center'>Frontend</div>
            <div>
              <CRow>
                <CCol>
                  <CImage title="Vue" className='space-btn' src={VueIcon} width={100} height={'auto'} />
                </CCol>
                <CCol>
                  <CImage className='space-btn' src={ReactIcon} width={100} height={'auto'} />
                </CCol>
                <CCol>
                  <CImage className='space-btn' src={AngularIcon} width={100} height={'auto'} />
                </CCol>
                <CCol>
                  <CImage className='space-btn' src={NextjsIcon} width={100} height={'auto'} />
                </CCol>
              </CRow>
            </div>
          </div>
          <div>
            <div className='skill-subtitle text-center'>State Management & Unit Testing</div>
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
            <div className='skill-subtitle text-center'>Backend</div>
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
            <div className='skill-subtitle text-center'>Database</div>
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
            <div className='skill-subtitle text-center'>Mobile & Hybrid</div>
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
            <div className='skill-subtitle text-center'>Cloud Service & CI/CD</div>
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
            <div className='skill-subtitle text-center'>Tools & Teknologi</div>
            <div>
              <CRow>
                <CCol>1</CCol>
                <CCol>2</CCol>
                <CCol>3</CCol>
                <CCol>4</CCol>
              </CRow>
            </div>
          </div>
        </div>
      </CContainer>
    </section>
  )
}

export default MySkillPage