import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


import './Header.css'

const Header = () => {
    let { user, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="dark" expand="lg" className='nav-hight' > 
                <Container fluid>
                    <Navbar.Brand className='fw-bold'>Travel <span className='t-color' > Gone </span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink className='nav-link text-light ' to="/home">Home</NavLink>
                            <NavLink className='nav-link text-light ' to="/guide">Top guide</NavLink>
                            <NavLink className='nav-link text-light ' to="/contact">Contact </NavLink>
                            {
                                user.email ? <div className='d-flex mx-auto ' >
                                <NavLink className='nav-link text-light ' to="/myorder"> My Order </NavLink>

                                   <p className='text-light text-center mt-auto'> {user.displayName} </p> <button className='nav-link btn text-light' onClick={logOut}  > Log Out </button>
                                </div> : <NavLink className='nav-link text-light ' to="/login">LogIn </NavLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
};

export default Header;