import React, { useState } from "react";
import "./Header.css";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <div className="site-header js-site-header">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-6 col-lg-4 site-logo" >
                            <a href="/">Rent Nest</a>
                        </div>
                        <div className="col-6 col-lg-8">
                            <div
                                className={`site-menu-toggle js-site-menu-toggle ${isMenuOpen ? 'open' : ''}`}
                                data-aos="fade"
                                onClick={toggleMenu}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            {/* END menu-toggle */}

                            <div className={`site-navbar js-site-navbar ${isMenuOpen ? 'open' : ''}`}>
                                <nav role="navigation">
                                    <div className="container">
                                        <div className="row full-height align-items-center">
                                            <div className="col-md-6 mx-auto">
                                                <ul className="list-unstyled menu">
                                                    <li className="active"><a href="/">Home</a></li>
                                                    <li><a href="/rooms">Rooms</a></li>
                                                    <li><a href="/about">About</a></li>
                                                    <li><a href="/events">Events</a></li>
                                                    <li><a href="/contact">Contact</a></li>
                                                    <li><a href="/reservation">Reservation</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
