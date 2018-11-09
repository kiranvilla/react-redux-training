import React from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom'

const Navbar = (props) => {
  // console.log(props)
  // setTimeout(() => {
  //   props.history.push('./about')
  // }, 2000);
    return(
        <nav className="nav-wrapper green darken-3">
        <div className="container">
          <div className="brand-logo">Poke'Times</div>
          <ul className="right">
            <li><Link to="/">Home</Link></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
        </div>
      </nav>
    )
}

export default withRouter(Navbar);