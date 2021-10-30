import React from "react"

const Footer = () =>
    <footer className="pt-4 mt-5 page-footer font-small dark">
        <div className="text-center container-fluid text-md-left">
            <div className="row">
                <div className="mt-3 col-md-6 mt-md-0">
                    <h5 className="text-uppercase">Footer Content</h5>
                    <p>Here you can use rows and columns to organize your footer content.</p>
                </div>

                <hr className="clearfix pb-0 w-100 d-md-none" />

                <div className="mb-3 col-md-3 mb-md-0">
                    <h5 className="text-uppercase">Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="#!">Link 1</a></li>
                        <li><a href="#!">Link 2</a></li>
                        <li><a href="#!">Link 3</a></li>
                        <li><a href="#!">Link 4</a></li>
                    </ul>
                </div>

                <div className="mb-3 col-md-3 mb-md-0">
                    <h5 className="text-uppercase">Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="#!">Link 1</a></li>
                        <li><a href="#!">Link 2</a></li>
                        <li><a href="#!">Link 3</a></li>
                        <li><a href="#!">Link 4</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="py-3 text-center footer-copyright">© 2020 Copyright:
            <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
        </div>

    </footer>

export default Footer