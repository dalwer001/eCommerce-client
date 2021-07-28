import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <section style ={{backgroundColor:"#F5F5F5"}}class="mt-5">
            <div class="row m-0 footer">
                <div class="col-md-3 p-5">
                    <p>Our company</p>
                    <p>Our history</p>
                    <p>Contact</p>
                    <p>Jobs</p>
                    <p>Journal</p>
                    <p>Store Locations</p>

                </div>
                <div class="col-md-3 p-5">
                    <p>FAQs</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Support</p>
                </div>
                <div class="col-md-3 p-5">
                    <p>Women</p>
                    <p>Men</p>
                    <p>Kids</p>
                    <p>Clothes</p>
                    <p>Shoes</p>
                    <p>Bags</p>
                    <p>Accessories</p>
                </div>
                <div class="col-md-3 p-5 ">
                    <p className="">Follow Us</p>
                    <Link to="#"><FontAwesomeIcon size="2x"className="text-primary ms-0 m-2" icon={faFacebook} /></Link>
                    <Link to="#"><FontAwesomeIcon size="2x"className="text-danger m-2  " icon={faInstagram} /></Link>
                    <Link to="#"><FontAwesomeIcon size="2x"className="text-info m-2 " icon={faTwitter} /></Link>
                    
                </div>
            </div>
            <div class="row m-0 footer ">
                <div class="col-md-12 text-center p-5">
                    <p>All rights reserved by ©Mysterious Software Company Ltd.</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;