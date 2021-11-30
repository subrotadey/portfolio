import React from 'react';
import logo from './../../images/logo.png'

const Nav = () => {
    return (
        <nav className="navbar">
            <div className="navbar__color">
                <div className="container">
                    <div className="navbar__container">
                        <ul className="nav__left">
                            <div className="navbar__left__logo">
                                <img className="logo__size" src={logo} alt="logo" />
                            </div>
                        </ul>
                        <ul className="navbar__right">
                            <li><a href="">Home</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Skills</a></li>
                            <li><a href="">Portfolio</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;