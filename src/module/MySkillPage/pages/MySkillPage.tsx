import React from 'react'
import { CCol, CContainer, CImage, CRow } from "@coreui/react";
import '../styles/index.css'
import VueIcon from '../../../assets/icon/Vue.svg'
import ReactIcon from '../../../assets/icon/React.svg'
import AngularIcon from '../../../assets/icon/Angular.svg'
import NextjsIcon from '../../../assets/icon/Next.svg'
import VuexIcon from '../../../assets/icon/Vuex.svg'
import ReduxIcon from '../../../assets/icon/Redux.svg'
import VitestIcon from '../../../assets/icon/Vitest.svg'
import JasmineIcon from '../../../assets/icon/Jasmine.svg'
import ExpressIcon from '../../../assets/icon/Express.svg'
import SpringBootIcon from '../../../assets/icon/Spring-Boot.svg'
import GinGonicIcon from '../../../assets/icon/Golang.svg'
import MySQLIcon from '../../../assets/icon/My-SQL.svg'
import PostgreSQLIcon from '../../../assets/icon/PostGIS.svg'
import RedisIcon from '../../../assets/icon/REDIS.svg'
import FirestoreIcon from '../../../assets/icon/Firebase.svg'

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
                  <CImage loading='lazy' title="Vue" className='space-btn' src={VueIcon} width={100} height={'auto'} />
                </CCol>
                <CCol>
                  <CImage loading='lazy' title="React" className='space-btn' src={ReactIcon} width={100} height={'auto'} />
                </CCol>
                <CCol>
                  <CImage loading='lazy' title="Angular" className='space-btn' src={AngularIcon} width={100} height={'auto'} />
                </CCol>
                <CCol>
                  <CImage loading='lazy' title="Next.js" className='space-btn' src={NextjsIcon} width={100} height={'auto'} />
                </CCol>
              </CRow>
            </div>
          </div>
          <div className='mt-4'>
            <div className='skill-subtitle text-center'>State Management & Unit Testing</div>
            <div>
              <CRow>
                <CCol>
                  <CImage loading='lazy' title="Vuex" className='space-btn' src={VuexIcon} width={100} height={'auto'} />
                </CCol>
                <CCol>
                  <CImage loading='lazy' title="Redux" className='space-btn' src={ReduxIcon} width={100} height={'auto'} />
                </CCol>
                <CCol>
                  <CImage loading='lazy' title="Vitest" className='space-btn' src={VitestIcon} width={100} height={'auto'} />
                </CCol>
                <CCol>
                  <CImage loading='lazy' title="Jasmine" className='space-btn' src={JasmineIcon} width={100} height={'auto'} />
                </CCol>
              </CRow>
            </div>
          </div>
          <div className='mt-4'>
            <div className='skill-subtitle text-center'>Backend</div>
            <div>
              <CRow>
                <CCol>
                  <CImage loading='lazy' title="Express.js (ES6)" className='space-btn' src={ExpressIcon} width={100} height={'auto'} />
                </CCol>
                <CCol>
                  <CImage loading='lazy' title="Spring Boot(Java)" className='space-btn' src={SpringBootIcon} width={100} height={'auto'} />
                </CCol>
                <CCol>
                  <CImage loading='lazy' title="Gin Gonic (Golang)" className='space-btn' src={GinGonicIcon} width={100} height={'auto'} />
                </CCol>
              </CRow>
            </div>
          </div>
          <div className='mt-4'>
            <div className='skill-subtitle text-center'>Database</div>
            <div>
              <CRow>
                <CCol>
                  <CImage loading='lazy' title="MySQL" className='space-btn' src={MySQLIcon} width={100} height={'auto'} />
                </CCol>
                <CCol>
                  <CImage loading='lazy' title="PostgreSQL" className='space-btn' src={PostgreSQLIcon} width={100} height={'auto'} />
                </CCol>
                <CCol>
                  <CImage loading='lazy' title="Redis" className='space-btn' src={RedisIcon} width={100} height={'auto'} />
                </CCol>
                <CCol>
                  <CImage loading='lazy' title="Firestore" className='space-btn' src={FirestoreIcon} width={100} height={'auto'} />
                </CCol>
              </CRow>
            </div>
          </div>
          <div className='mt-4'>
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
          <div className='mt-4'>
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