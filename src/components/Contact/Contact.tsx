import React from 'react'
import contactUs from '../../images/contact-us.png'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div>
            <section className="contact_sec">
            <div className="container">
                <div className="row align-items-center wow zoomIn" data-wow-delay="0.3s">
    
                    <div className="col-md-6 contactImg wow bounceInLeft" data-wow-delay="0.3s">
                        <img src={contactUs} className="img-fluid" alt="" style={{maxWidth: "450px"}} />
                    </div>
    
                    <div className="col-md-6 contactText wow bounceInRight" data-wow-delay="0.3s">
                        <div className="contact_form">
                            <h2>Get in Touch</h2>
                            <form action="/action_page.php">
                                <div className="form-group">
                                    <input type="text" className="form-control" id="uname" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" id="email" placeholder="Your email" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="phone" placeholder="Your Contact Number" />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control txtarea" id="msg" placeholder="Message"></textarea>
                                </div>
                                <Link to="/" className="contact_btn">Submit</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
      )
}

export default Contact