import React from 'react'
import { CCol, CContainer, CImage, CRow } from "@coreui/react";
import '../styles/index.css'

const MySkillPage: React.FC = () => {
  return (
    <CContainer>
      <div className="text-center">
        <h1 className="about-title">KETERAMPILAN SAYA</h1>
      </div>
      <div className='skill-layout'>
        <div>
          <div className='skill-subtitle text-center'>Frontend Framework</div>
          <div>
            <CRow>
              <CCol>
                <CImage loading='lazy' title="Vue" className='space-btn' src={'https://ujangaripin24.github.io/img/icon/Vue.svg'} width={100} height={'auto'} />
              </CCol>
              <CCol>
                <CImage loading='lazy' title="React" className='space-btn' src={'https://ujangaripin24.github.io/img/icon/React.svg'} width={100} height={'auto'} />
              </CCol>
              <CCol>
                <CImage loading='lazy' title="Angular" className='space-btn' src={'https://ujangaripin24.github.io/img/icon/Angular.svg'} width={100} height={'auto'} />
              </CCol>
              <CCol>
                <CImage loading='lazy' title="Next.js" className='space-btn' src={'https://ujangaripin24.github.io/img/icon/Next.svg'} width={100} height={'auto'} />
              </CCol>
            </CRow>
          </div>
        </div>
        <div className='mt-4'>
          <div className='skill-subtitle text-center'>State Management & Frontend Tools</div>
          <div>
            <CRow>
              <CCol>
                <CImage loading='lazy' title="Vuex" className='space-btn' src={'https://ujangaripin24.github.io/img/icon/Vuex.svg'} width={100} height={'auto'} />
              </CCol>
              <CCol>
                <CImage loading='lazy' title="Redux" className='space-btn' src={'https://ujangaripin24.github.io/img/icon/Redux.svg'} width={100} height={'auto'} />
              </CCol>
              <CCol>
                <CImage loading='lazy' title="Leaflet" className='space-btn' src={'https://ujangaripin24.github.io/img/icon/Leaflet.svg'} width={100} height={'auto'} />
              </CCol>
              <CCol>
                <CImage loading='lazy' title="Mapbox" className='space-btn' src={'https://ujangaripin24.github.io/img/icon/Mapbox.svg'} width={100} height={'auto'} />
              </CCol>
              <CCol>
                <CImage loading='lazy' title="Vitest" className='space-btn' src={'https://ujangaripin24.github.io/img/icon/Vitest.svg'} width={100} height={'auto'} />
              </CCol>
              <CCol>
                <CImage loading='lazy' title="Jasmine" className='space-btn' src={'https://ujangaripin24.github.io/img/icon/Jasmine.svg'} width={100} height={'auto'} />
              </CCol>
            </CRow>
          </div>
        </div>
        <div className='mt-4'>
          <div className='skill-subtitle text-center'>Backend Framework</div>
          <div>
            <CRow>
              <CCol>
                <CImage loading='lazy' title="Express.js (ES6)" className='space-btn' src={'https://ujangaripin24.github.io/img/icon/Express.svg'} width={100} height={'auto'} />
              </CCol>
              <CCol>
                <CImage loading='lazy' title="Spring Boot(Java)" className='space-btn' src={'https://ujangaripin24.github.io/img/icon/Spring-Boot.svg'} width={100} height={'auto'} />
              </CCol>
              <CCol>
                <CImage loading='lazy' title="Gin Gonic (Golang)" className='space-btn' src={'https://ujangaripin24.github.io/img/icon/Golang.svg'} width={100} height={'auto'} />
              </CCol>
            </CRow>
          </div>
        </div>
        <div className='mt-4'>
          <div className='skill-subtitle text-center'>Database</div>
          <div>
            <CRow>
              <CCol>
                <CImage loading='lazy' title="MySQL" className='space-btn' src={'https://ujangaripin24.github.io/img/icon/My-SQL.svg'} width={100} height={'auto'} />
              </CCol>
              <CCol>
                <CImage loading='lazy' title="PostgreSQL" className='space-btn' src={'https://ujangaripin24.github.io/img/icon/PostGIS.svg'} width={100} height={'auto'} />
              </CCol>
              <CCol>
                <CImage loading='lazy' title="Redis" className='space-btn' src={'https://ujangaripin24.github.io/img/icon/REDIS.svg'} width={100} height={'auto'} />
              </CCol>
              <CCol>
                <CImage loading='lazy' title="Firestore" className='space-btn' src={'https://ujangaripin24.github.io/img/icon/Firebase.svg'} width={100} height={'auto'} />
              </CCol>
            </CRow>
          </div>
        </div>
        <div className='mt-4'>
          <div className='skill-subtitle text-center'>Mobile Framework & Hybrid</div>
          <div>
            <CRow>
              <CCol>
                <CImage loading='lazy' title="Flutter" className='space-btn' src={'https://ujangaripin24.github.io/img/icon/Flutter.svg'} width={100} height={'auto'} />
              </CCol>
              <CCol>
                <CImage loading='lazy' title="React Native" className='space-btn' src={'https://ujangaripin24.github.io/img/icon/React-Native.svg'} width={100} height={'auto'} />
              </CCol>
              <CCol>
                <CImage loading='lazy' title="Ionic Framework" className='space-btn' src={'https://ujangaripin24.github.io/img/icon/Ionic.svg'} width={100} height={'auto'} />
              </CCol>
            </CRow>
          </div>
        </div>
        <div className='mt-4'>
          <div className='skill-subtitle text-center'>Cloud Service & CI/CD</div>
          <div>
            <CRow>
              <CCol>
                <CImage loading='lazy' title="AWS (EC2 & RDS)" className='space-btn' src={'https://ujangaripin24.github.io/img/icon/AWS.svg'} width={100} height={'auto'} />
              </CCol>
              <CCol>
                <CImage loading='lazy' title="Vercel" className='space-btn' src={'https://ujangaripin24.github.io/img/icon/Vercel.svg'} width={100} height={'auto'} />
              </CCol>
              <CCol>
                <CImage loading='lazy' title="Docker" className='space-btn' src={'https://ujangaripin24.github.io/img/icon/Docker.svg'} width={100} height={'auto'} />
              </CCol>
              <CCol>
                <CImage loading='lazy' title="JENKINS" className='space-btn' src={'https://ujangaripin24.github.io/img/icon/JENKINS.svg'} width={100} height={'auto'} />
              </CCol>
              <CCol>
                <CImage loading='lazy' title="Github Action" className='space-btn' src={'https://ujangaripin24.github.io/img/icon/Github.svg'} width={100} height={'auto'} />
              </CCol>
              <CCol>
                <CImage loading='lazy' title="MINIO" className='space-btn' src={'https://ujangaripin24.github.io/img/icon/MINIO.svg'} width={100} height={'auto'} />
              </CCol>
            </CRow>
          </div>
        </div>
      </div>
    </CContainer>
  )
}

export default MySkillPage