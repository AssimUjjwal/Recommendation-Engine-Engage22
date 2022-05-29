import React from 'react';
import { Link } from 'react-router-dom';

import './footer.scss';
import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/MovieDB.jpg';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                {/* Footer Logo */}
                <div className="footer__content__logo">
                    <div className="logo">
                        <img style={{borderRadius: '5px'}} src={logo} alt="" />
                        <Link to="/">MovieDB</Link>
                    </div>
                </div>
                {/* Footer Content */}
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/">Home</Link>
                        <Link to="/">Contact us</Link>
                        <Link to="/">Term of services</Link>
                        <Link to="/">About us</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Live</Link>
                        <Link to="/">FAQ</Link>
                        <Link to="/">Premium</Link>
                        <Link to="/">Pravacy policy</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">You must watch</Link>
                        <Link to="/">Recent release</Link>
                        <Link to="/">Top IMDB</Link>
                    </div>
                </div>
                <div style={{textAlign:'center', marginTop:'3rem'}}><h1>Made with Love💖 by Assim Ujjwal.</h1></div>
                <div style={{textAlign:'center', marginTop:'3rem',color:'red'}}><h1>For Microsoft Engage Internship Programme.</h1></div>
            </div>
        </div>
    );
}

export default Footer;
