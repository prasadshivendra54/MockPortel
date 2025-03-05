import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PublicLayout from './PublicLayout'
import HomePage from '../components/HomePage/HomePage'
import About from '../components/About/About'
import Login from '../components/Login/Login'
import TestSeries from '../components/TestSeries/TestSeries'
import SscExamList from '../components/SscExamList/SscExamList'
import Report from '../components/Report/Report'

const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route 
                        element={<PublicLayout Component={HomePage} सिर={true} पैर={true} />}
                        path='/'
                    />
    
                    <Route 
                        element={<PublicLayout Component={About} सिर={true} पैर={true} />}
                        path='/about'
                    />
                    <Route 
                        element={<PublicLayout Component={Login} सिर={false} पैर={false} />}
                        path='/login'
                    />
                    <Route 
                        element={<PublicLayout Component={TestSeries} सिर={true} पैर={true} />}
                        path='/testseries'
                    />
                    <Route 
                        element={<PublicLayout Component={SscExamList} सिर={true} पैर={true} />}
                        path='/ssc-examlist'
                    />
                    <Route 
                        element={<PublicLayout Component={Report} सिर={true} पैर={true} />}
                        path='/report'
                    />
                </Routes>
            </BrowserRouter>
        </div>
      )
}

export default Routing

