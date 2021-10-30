import React from 'react';
// import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
            <div className="container">
                <NavLink className="navbar-brand" to="/home">Web Zone</NavLink>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <div className="mx-auto"></div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="text-white nav-link" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="text-white nav-link" to="/guide">Top Guide</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="text-white nav-link" to="/blog">Blog</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="text-white nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Header;