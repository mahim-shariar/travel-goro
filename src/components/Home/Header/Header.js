import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import useAuth from './../../hooks/useAuth';

const style = {
    textDecoration: 'none',
    marginRight: '10px',
    fontSize: '17px',
    color: 'white'
}

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar bg="dark" variant="dark" className='mx-2' collapseOnSelect expand="lg" style={{ backgroundColor: '#0a1735', }}>
            <Navbar.Brand href="#home">
                <h4>
                    <span className='text-light' > Travel </span> <span className='text-primary' > Zone </span>
                </h4>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse >
                <Nav className='text-primary align-items-center ms-auto'>
                    <Link style={style}  to="/home">Home</Link>
                    <Link style={style}  to="/guide">Top guide</Link>
                    <Link style={style}  to="/contact">Contact </Link>
                    <Link style={style}  to="/Deshbord/blog">Add Blog</Link>
                    <Link style={style} to='/Deshbord'>Deshbord</Link>
                    {
                        user.email ? <div className='d-flex mx-auto ' >
                            <Link style={style} className='nav-link text-light my-auto ' to="/myorder"> My Order </Link>

                            <p className='text-light text-center mt-auto'> {user.displayName} </p> <button className='nav-link btn text-light' onClick={logOut}  > Log Out </button>
                        </div> : <Link style={style} className='nav-link text-light ' to="/login">LogIn </Link>
                    }
                    {
                        user.email && <Avatar
                            alt="Remy Sharp"
                            src={user?.photoURL}
                            sx={{ width: 45, height: 45, m: 1 }}
                        />
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
};
export default Navigation;
