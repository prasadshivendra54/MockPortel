import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

interface CheckPublic {
  Component: any;
  सिर: boolean;
  पैर: boolean;
}

const PublicLayout:React.FC<React.PropsWithChildren<CheckPublic>> = ({
    Component,
    सिर = false,
    पैर = false
}) => {
  return (
    <div>
        {सिर && <Navbar />}
        <Component />
        {पैर && <Footer />}
    </div>
  )
}

export default PublicLayout