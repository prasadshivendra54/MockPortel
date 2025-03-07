import React from 'react'
import logo from '../../images/logo.png'
import user from '../../images/user.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-md bg-light">
        <Link className="navbar-brand" to="/">
          <img src={logo} className="img-fluid" alt="" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapisbleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="collapisbleNavbar"
        >
          <ul className="navbar-nav main_menu">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/testseries" className="nav-link">
                Test Series
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login & Signup
              </Link>
            </li>

            <li className="nav-item dropdown show">
              <Link
                to="/profile"
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
              </Link>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <Link to="/profile" className="dropdown-item nav-link">
                  Profile
                </Link>
                <Link to="/login" className="dropdown-item nav-link logout-link">
                  Logout
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar