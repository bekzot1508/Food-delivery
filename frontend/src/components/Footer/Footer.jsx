/* eslint-disable no-unused-vars */
import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quidem quaerat sunt quod fugiat perspiciatis deserunt porro unde odit enim accusantium, alias, ad consequuntur? Non aperiam dolor quo at facere.
                </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+971-50-732-08-42</li>
                    <li>daminovbekzod@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            copyright 2024  &#169;Tomato.com - ALL Right Reserved.
        </p>
    </div>
  )
}

export default Footer