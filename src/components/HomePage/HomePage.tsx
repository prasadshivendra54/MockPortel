import React from 'react'
import LandingPage from './LandingPage'
import AboutPage from './AboutPage'
import TestCardPage from './TestCardPage'
import StudentReviews from './StudentReviews'
import Contact from '../Contact/Contact'

const HomePage = () => {
  return (
    <div>
        <LandingPage />
        <AboutPage />
        <TestCardPage />
        {/* <StudentReviews /> */}
        <Contact />
    </div>
  )
}

export default HomePage