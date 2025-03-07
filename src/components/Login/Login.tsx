import React from "react";
import LoginSlider from "./LoginSlider";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login_container">
      <div className="container-fluid">
        <div className="loginForm row">
          <div className="col-lg-6 right_box float-right">
            <div className="slider">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                </ol>
                <div className="carousel-inner">
                  <LoginSlider />
                  <LoginSlider />
                  <LoginSlider />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 left_box float-left">
            <div className="customForm">
              <div className="form-section login">
                <div className="form-heading">
                  <h2>LOGIN</h2>
                  <p>Login to Mock portal</p>
                </div>
                <div className="main-form">
                  <div className="form-group">
                    <label>User Name</label>
                    <input
                      type="Username"
                      className="form-control"
                      placeholder="Johnnymason454@gmail.com"
                    />
                    <div className="error-msg"></div>
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="***********"
                    />
                    <div className="error-msg"></div>
                  </div>
                  <div className="form-group">
                    <label className="checkbox">
                      <input type="checkbox" />
                      <i className="input-helper"></i> Remember me
                    </label>
                  </div>

                  <div className="form-group">
                    <Link
                      to="/"
                      className="forgot_pass"
                      onClick={(e) => e.target}
                    >
                      Forgot Password?{" "}
                    </Link>
                    <Link to="/testseries" className="login-btn">
                      Login
                    </Link>
                  </div>
                </div>
                <div className="tag_line">
                  New User?{" "}
                  <Link to="/" onClick={(e) => e.target}>
                    {" "}
                    Register Here
                  </Link>
                </div>
              </div>
              <div className="form-section forget-password">
                <div className="form-heading">
                  <Link
                    to="/"
                    className="back-btn"
                    onClick={(e) => e.target}
                  >
                    <i className="icon">
                      <img src="images/arrow.svg" alt="" />
                    </i>{" "}
                    Back to Login{" "}
                  </Link>
                  <h2>Forgot Password</h2>
                </div>
                <div className="main-form">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="johnappleased@gmail.com"
                    />
                    <div className="error-msg"></div>
                  </div>

                  <div className="form-group">
                    <Link
                      to="/"
                      className="login-btn"
                      onClick={(e) => e.target}
                    >
                      Done
                    </Link>
                  </div>
                </div>
              </div>
              <div className="form-section register">
                <div className="form-heading">
                  <Link
                    to="/"
                    className="back-btn"
                    onClick={(e) => e.target}
                  >
                    <i className="icon">
                      <img src="images/arrow.svg" alt="" />
                    </i>{" "}
                    Back to Login{" "}
                  </Link>
                  <h2>REGISTER</h2>
                  <p>
                    It is easy to register with us. Let’s create your account.
                  </p>
                </div>
                <div className="main-form">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="John"
                        />
                        <div className="error-msg"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Appleased"
                        />
                        <div className="error-msg"></div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="johnappleased@gmail.com"
                        />
                        <div className="error-msg"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Contact No.</label>
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="+91 9876543210"
                        />
                        <div className="error-msg"></div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label> Password</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="***********"
                        />
                        <div className="error-msg"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="***********"
                        />
                        <div className="error-msg"></div>
                      </div>

                      <div className="form-group">
                        <Link to="/" className="login-btn">
                          {" "}
                          Register{" "}
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="social_links">
                    <ul>
                      <li>
                        <Link to="/">
                          <img src="images/facebook.png" title="facebook" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <img src="images/twitter.png" title="twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <img src="images/googleLogo.png" title="google" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
