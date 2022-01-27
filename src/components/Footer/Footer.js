import React from "react"
import { Link } from "react-router-dom"
import './Footer.css'

const Footer = () =>
    <footer className="pt-4 mt-5 page-footer font-small dark">
        <div className="text-center container-fluid text-md-left">
            <div className="row">
                <div className="mt-3 col-md-9 mt-md-0">
                    <h5 className="text-uppercase">Travel Gone</h5>
                    <p>Here you can use rows and columns to organize your footer content.</p>
                </div>

                <hr className="clearfix pb-0 w-100 d-md-none" />

                <div className=" mb-3 col-md-3 mb-md-0">
                    <h5 className="text-uppercase">All Option</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/login">LogIn</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/guide">Top Guide</Link></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="py-3 text-center footer-copyright">© 2020 Copyright:
            <Link to="/home">Travel Gone</Link>
        </div>

    </footer>

export default Footer