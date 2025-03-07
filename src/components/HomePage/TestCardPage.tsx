import React from 'react'
import { Link } from 'react-router-dom'

const TestCardPage = () => {
  return (
    <div>
        <section className="test_cta">
            <div className="container">
                <div className="row align-items-end  wow zoomIn" data-wow-delay="0.3s">
                    <div className="col-sm-12 col-lg-12 left_txt">
                        <h5>Test</h5>
                        <p className="mb-0">Get Access to all tests for</p>
                        <p className="highlighted-text"><span>200+</span> exams</p>
                        <p className="highlighted-text small-text">Start's from just <span>&#8377;100</span>/month</p>
                        <Link to="/plans" className="white_btn">Buy Test Pass</Link>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default TestCardPage