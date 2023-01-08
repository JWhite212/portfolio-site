import * as React from "react"
import {useState} from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const isActive = ({ isCurrent }) => {
  return isCurrent
    ? { className: "nav-link active" }
    : { className: "nav-link" }
}



const ExactNavLink = props => <Link getProps={isActive} {...props} />

const Navbar = ({ siteTitle }) => {

  //Change navigation when scrolling between opaque/solid.
const [color, setColor] = useState(false)
const changeColor = () => {
  if (window.scrollY >= 200) {
    setColor(true)
  } else {
    setColor(false)
  }
}
window.addEventListener("scroll", changeColor)



  return (
    <nav className={color ? 'header navbar navbar-expand-md sticky-md-top navbar-dark fw-bold bg-primary text-white' : 'header navbar navbar-expand-md sticky-md-top fw-bold bg-opacity-10'}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" href="#">
          {siteTitle}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-navbar"
          aria-controls="main-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <ExactNavLink to="/">Home</ExactNavLink>
            </li>
            <li className="nav-item">
              <ExactNavLink to="/about">About</ExactNavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
