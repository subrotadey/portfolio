import React from 'react';
import {
    FaLinkedinIn,
    FaGithub,
    FaFacebookF,
    FaInstagram,
    FaTwitter
} from "react-icons/fa";
import img from './../images/img.png'

const Banner = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header__content">
                            <div className="header__section">
                                <ul className="header__ul">
                                    <li><FaLinkedinIn/></li>
                                    <li><FaGithub/></li>
                                    <li><FaFacebookF/></li>
                                    <li><FaInstagram/></li>
                                    <li><FaTwitter/></li> 
                                </ul>
                                <h1>I am Subrota Dey</h1>
                                <p>I am a professional Web Developer, with long time Experience in this field</p>
                                <div className="header__buttons">
                                    <a href="" className="btn btn-outline">My Portfolio</a> &nbsp; &nbsp; &nbsp;
                                    <a href="" className="btn btn-smart">Resume</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="banner__img">
                            {/* <img src={img} alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Banner;