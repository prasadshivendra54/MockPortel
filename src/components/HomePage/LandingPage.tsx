import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
        <section className="banner_sec homeBanner">
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <div className="banner_content ">
                        <div className="ribbon"></div>
                         <h1 className="animate one">
                            <span>M</span><span>O</span><span>C</span><span>K</span><span>P</span><span>O</span><span>R</span><span>T</span><span>A</span><span>L</span>
                        </h1>

                        <h3>Here you can 
					  <span className="txt-rotate" data-period="2000" data-rotate='[ "Personalized Learning for Every Learner", "Performance Enhancing Remedial Methodology ", "Simulated Tests with Deep Analysis"]'></span>
					</h3>
                        <p>Hi! Welcome to MOCK PORTAL. Here you can prepare your Exam by given tests. India's online Test serious plateform.</p>
                        <Link to="/login" className="custom_btn">JOIN</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default LandingPage