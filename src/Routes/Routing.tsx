import React from 'react'
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom'
import PublicLayout from './PublicLayout'
import Home from '../pages/Home'
import AboutPage from '../pages/AboutPage'
import LoginPage from '../pages/LoginPage'
import TestPage from '../pages/TestPage'
import ExamPage from '../pages/ExamPage'
import ReportPage from '../pages/ReportPage'
import ProfilePage from '../pages/ProfilePage'
import ReferPage from '../pages/ReferPage'
import PlanPage from '../pages/PlanPage'
import ExamTestPage from '../pages/ExamTestPage'
import ContactPage from '../pages/ContactPage'
import ErrorPage from '../pages/ErrorPage'
import ReviewPage from '../pages/ReviewPage'

const Routing = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <PublicLayout Component={Home} सिर={true} पैर={true} />
        },
        {
            path: '/about',
            element: <PublicLayout Component={AboutPage} सिर={true} पैर={true} />
        },
        {
            path: '/login',
            element: <PublicLayout Component={LoginPage} सिर={false} पैर={false} />
        },
        {
            path: '/testseries',
            element: <PublicLayout Component={TestPage} सिर={true} पैर={true} />
        },
        {
            path: '/ssc-examlist',
            element: <PublicLayout Component={ExamPage} सिर={true} पैर={true} />
        },
        {
            path: '/report',
            element: <PublicLayout Component={ReportPage} सिर={true} पैर={true} />
        },
        {
            path: '/profile',
            element: <PublicLayout Component={ProfilePage} सिर={true} पैर={true} />
        },
        {
            path: '/referandearn',
            element: <PublicLayout Component={ReferPage} सिर={true} पैर={true} />
        },
        {
            path: '/plans',
            element: <PublicLayout Component={PlanPage} सिर={true} पैर={true} />
        },
        {
            path: '/examtest',
            element: <PublicLayout Component={ExamTestPage} सिर={true} पैर={true} />
        },
        {
            path: '/contact',
            element: <PublicLayout Component={ContactPage} सिर={true} पैर={true} />
        },
        {
            path: '/*',
            element: <PublicLayout Component={ErrorPage} सिर={true} पैर={true} />
        },
        {
            path: '/review',
            element: <PublicLayout Component={ReviewPage} सिर={true} पैर={true} />
        }
    ])

    return (

        <RouterProvider router={router} />

        // <div>
        //     <BrowserRouter>
        //         <Routes>
        //             <Route 
        //                 element={<PublicLayout Component={Home} सिर={true} पैर={true} />}
        //                 path='/'
        //             />
        //             <Route 
        //                 element={<PublicLayout Component={AboutPage} सिर={true} पैर={true} />}
        //                 path='/about'
        //             />
        //             <Route 
        //                 element={<PublicLayout Component={LoginPage} सिर={false} पैर={false} />}
        //                 path='/login'
        //             />
        //             <Route 
        //                 element={<PublicLayout Component={TestPage} सिर={true} पैर={true} />}
        //                 path='/testseries'
        //             />
        //             <Route 
        //                 element={<PublicLayout Component={ExamPage} सिर={true} पैर={true} />}
        //                 path='/ssc-examlist'
        //             />
        //             <Route 
        //                 element={<PublicLayout Component={ReportPage} सिर={true} पैर={true} />}
        //                 path='/report'
        //             />
        //             <Route 
        //                 element={<PublicLayout Component={ProfilePage} सिर={true} पैर={true} />}
        //                 path='/profile'
        //             />
        //             <Route 
        //                 element={<PublicLayout Component={ReferPage} सिर={true} पैर={true} />}
        //                 path='/referandearn'
        //             />
        //             <Route 
        //                 element={<PublicLayout Component={PlanPage} सिर={true} पैर={true} />}
        //                 path='/plans'
        //             />
        //             <Route 
        //                 element={<PublicLayout Component={ExamTestPage} सिर={true} पैर={true} />}
        //                 path='/examtest'
        //             />
        //             <Route 
        //                 element={<PublicLayout Component={ContactPage} सिर={true} पैर={true} />}
        //                 path='/contact'
        //             />
        //             <Route 
        //                 element={<PublicLayout Component={ErrorPage} सिर={false} पैर={false} />}
        //                 path='/*'
        //             />
        //             <Route 
        //                 element={<PublicLayout Component={ReviewPage} सिर={true} पैर={true} />}
        //                 path='/review'
        //             />
        //         </Routes>
        //     </BrowserRouter>
        // </div>
      )
}

export default Routing

