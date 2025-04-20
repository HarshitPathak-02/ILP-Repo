import React from 'react'
import './Header.css'
const Header = () => {

  return (
    <>
        <div className="nav">
            <div className="navbar-left">
                <a href='#' style={{textDecoration:'none', color:'white'}}><h4>Welcome To React</h4></a>
            </div>
            <div className="navbar-middle">
                <h4>Home</h4>
                <h4>About</h4>
                <h4>Contact</h4>
            </div>
            <div className="navbar-right">
                <h4>Login</h4>
                <h4>Sign Up</h4>
            </div>
        </div>
    </>
  )
}

export default Header
