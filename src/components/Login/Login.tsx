import React from "react";

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
                  <div className="carousel-item active">
                    <div className="outer_slide">
                      <span className="logos">
                        <img src="images/logoWhite.png" />
                      </span>
                      <h2>Move to What Moves you</h2>
                      <p>
                        {" "}
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="outer_slide">
                      <span className="logos">
                        <img src="images/logoWhite.png" />
                      </span>
                      <h2>Move to What Moves you</h2>
                      <p>
                        {" "}
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="outer_slide">
                      <span className="logos">
                        <img src="images/logoWhite.png" />
                      </span>
                      <h2>Move to What Moves you</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod
                      </p>
                    </div>
                  </div>
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
                      <i className="input-helper"></i> Remember me{" "}
                    </label>
                  </div>

                  <div className="form-group">
                    <a
                      href="/"
                      className="forgot_pass"
                      onClick={(e) => e.target}
                    >
                      Forgot Password?{" "}
                    </a>
                    <a href="index.html" className="login-btn">
                      Login
                    </a>
                  </div>
                </div>
                <div className="tag_line">
                  New User?{" "}
                  <a href="/" onClick={(e) => e.target}>
                    {" "}
                    Register Here
                  </a>
                </div>
              </div>
              <div className="form-section forget-password">
                <div className="form-heading">
                  <a
                    href="/"
                    className="back-btn"
                    onClick={(e) => e.target}
                  >
                    <i className="icon">
                      <img src="images/arrow.svg" alt="" />
                    </i>{" "}
                    Back to Login{" "}
                  </a>
                  <h2>Forgot Password</h2>
                  {/* <p>Login to Offer Check Agent web portal</p> */}
                </div>
                <div className="main-form">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="johnappleased@gmail.com"
                      // autofocus=""
                    />
                    <div className="error-msg"></div>
                  </div>

                  <div className="form-group">
                    <a
                      href="/"
                      className="login-btn"
                      onClick={(e) => e.target}
                    >
                      Done
                    </a>
                  </div>
                </div>
              </div>
              <div className="form-section register">
                <div className="form-heading">
                  <a
                    href="/"
                    className="back-btn"
                    onClick={(e) => e.target}
                  >
                    <i className="icon">
                      <img src="images/arrow.svg" alt="" />
                    </i>{" "}
                    Back to Login{" "}
                  </a>
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
                          // autofocus=""
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
                          // autofocus=""
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
                        <a href="/" className="login-btn">
                          {" "}
                          Register{" "}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="social_links">
                    <ul>
                      <li>
                        <a href="/">
                          <img src="images/facebook.png" title="facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <img src="images/twitter.png" title="twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <img src="images/googleLogo.png" title="google" />
                        </a>
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
