import React from 'react'
import logo from '../../images/logo.png'
import user from '../../images/user.png'

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-md bg-light">
        <a className="navbar-brand" href="/">
          <img src={logo} className="img-fluid" alt="" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapisbleNavbar"
        >
          <span className="navbar-toggler-icon"> </span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="collapisbleNavbar"
        >
          <ul className="navbar-nav main_menu">
            <li className="nav-item">
              <a href="/" className="nav-link active">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/s.html" className="nav-link">
                Test Series
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Login & Signup
              </a>
            </li>

            <li className="nav-item dropdown show">
              <a
                href="/"
                className="nav-link"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src={user}
                  className="img-fluid profile_icon"
                  alt=""
                />
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a href="/" className="dropdown-item nav-link">
                  Profile
                </a>
                <a href="/" className="dropdown-item nav-link logout-link">
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar