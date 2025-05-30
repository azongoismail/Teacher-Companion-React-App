import React from 'react';
import {  Routes, Route,  } from 'react-router-dom'
import './App.css'
import Layout from './Pages/Layout';
import Basics from './Pages/Basics';
import Home from './Pages/Home';
import LessonPlan from './Pages/lessonPlan';
import Contact from './Pages/Contact';
import Footer from './components/Footer'
import BasicSev from './Pages/BasicSev';
import Basic8 from './Pages/Basic8';
import Basic9 from './Pages/Basic9';
import LessonPlans from './Pages/LessonPlans';
import BasicLessonPlanPage from './Pages/BasicLessonPlanPage';
import Basic9LessonPlanPage from './Pages/Basic9LessonPlanPage';
import Basic7AssessmentPage from './Pages/Basic7AssessmentPage';
import Basic8AssessmentPage from './Pages/Basic8Assessmentpage';
import Basic9AssessmentPage from './Pages/Basic9AssessmentPage';
import SciencePage from './Pages/SciencePage';
import ScienceLessonPlanPage from './Pages/ScienceLessonPlanPage';
import MathPage from './Pages/mathPage';
import SocialStudiesPage from './Pages/SocialStudiesPage';
import CareerTechPage from './Pages/CareerTechPage';
import EnglishPage from './Pages/EnglishPage';
import CADPage from './Pages/CADPage';
import RMEPage from './Pages/RMEpage';
import ComputingPage from './Pages/ComputingPage';
function App() {
  return (
    <>
    <div className='flex flex-col min-h-screen' >
    <Routes className=''>
      <Route path='/' element={<Layout />}>
      <Route index element={<Home/>}/>
      <Route path='basics' element={<Basics/>}/>
      <Route path='lesson plan' element={<LessonPlan/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='basicSev' element={ <BasicSev />}/>
      <Route path='basic8' element={ <Basic8 />}/>
      <Route path='basic9' element={ <Basic9 />}/>
      <Route path='lessonPlans' element={ <LessonPlans/>}/>
      <Route path='basiclessonPlanPage' element={ <BasicLessonPlanPage/>}/>
      <Route path='basic9lessonPlanPage' element={ <Basic9LessonPlanPage/>}/>
      <Route path='basic7AssessmentPage' element={ <Basic7AssessmentPage/>}/>
      <Route path='basic8AssessmentPage' element={ <Basic8AssessmentPage/>}/>
      <Route path='basic9AssessmentPage' element={ <Basic9AssessmentPage/>}/>
      <Route path='SciencePage' element={ <SciencePage/>}/>
      <Route path='ScienceLessonPlanPage' element={ <ScienceLessonPlanPage/>}/>
      <Route path='mathPage' element={ <MathPage/>}/>
      <Route path='EnglishPage' element={ <EnglishPage/>}/>
      <Route path='socialStudiesPage' element={ <SocialStudiesPage/>}/>
      <Route path='ComputingPage' element={ <ComputingPage/>}/>
      <Route path='RMEPage' element={ <RMEPage/>}/>
      <Route path='CADPage' element={ <CADPage/>}/>
      <Route path='CareerTechPage' element={ <CareerTechPage/>}/>
      </Route>
      </Routes>
      <Footer />
    </div>
    </>
  )
}
export default App
