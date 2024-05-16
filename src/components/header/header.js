import React from "react";
import logo from '../../images/logo.svg'

import './header.css'

const Header = () => {
    return (
        <header className="header">
            <a href="/" >
                <img src={logo} alt="logo" className="logo"></img>
            </a>

            <nav>
                <div className="mobile-menu">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>

                <ul className="nav-list">
                    <li className="nav-link"><a href="/">Features</a></li>
                    <li className="nav-link"><a href="/">Team</a></li>
                    <li className="nav-link"><a href="/">Sign In</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header