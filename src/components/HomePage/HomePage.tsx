import React from 'react'
import LandingPage from './LandingPage'
import AboutPage from './AboutPage'
import TestCardPage from './TestCardPage'
import StudentReviews from './StudentReviews'
import ContactForm from './ContactForm'

const HomePage = () => {
  return (
    <div>
        <LandingPage />
        <AboutPage />
        <TestCardPage />
        {/* <StudentReviews />
        <ContactForm /> */}
    </div>
  )
}

export default HomePage