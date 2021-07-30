import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import'./Footer.css';
import Typography from '@material-ui/core/Typography';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'All rights reserved by ©Mysterious Software Company Ltd. '}
      {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const Footer = () => {
    return (
        <section style ={{backgroundColor:"#F5F5F5"}}class="mt-5">
            <div class="row m-0 footer">
                <div class="col-md-3 p-5">
                    <h6 className="text-muted">About Us</h6>
                    <p><Link to="/ourCompany">Our company</Link></p>
                    <p><Link to="/history">Our history</Link></p>
                    <p><Link to="/contact">Contact</Link></p>
                    <p><Link to="/ourCompany">Jobs</Link></p>
                    <p><Link to="/ourCompany">Store Locations</Link></p>

                </div>
                <div class="col-md-3 p-5">
                <h6 className="text-muted">How can we help</h6>
                    <p><Link to="/ourCompany">FAQsy</Link></p>
                    <p><Link to="/ourCompany">Terms & Conditions</Link></p>
                    <p><Link to="/ourCompany">Privacy Policy</Link></p>
                    <p><Link to="/ourCompany">Support</Link></p>
                </div>
                <div class="col-md-3 p-5">
                <h6 className="text-muted">Shop</h6>
                    <p><Link to="/ourCompany">Women</Link></p>
                    <p><Link to="/ourCompany">Men</Link></p>
                    <p><Link to="/ourCompany">Kids</Link></p>
                    <p><Link to="/ourCompany">Clothes</Link></p>
                    <p><Link to="/ourCompany">Shoes</Link></p>
                    <p><Link to="/ourCompany">Bags</Link></p>
                    <p><Link to="/ourCompany">Accessories</Link></p>
                </div>
                <div class="col-md-3 p-5 ">
                    <h6 className="text-muted">Follow Us</h6>
                    <Link to="#"><FontAwesomeIcon size="2x"className="text-primary ms-0 m-2" icon={faFacebook} /></Link>
                    <Link to="#"><FontAwesomeIcon size="2x"className="text-danger m-2  " icon={faInstagram} /></Link>
                    <Link to="#"><FontAwesomeIcon size="2x"className="text-info m-2 " icon={faTwitter} /></Link>
                    
                </div>
            </div>
            <div class="row m-0 footer ">
                <div class="col-md-12 text-center p-5">
                <Copyright />
                   
                </div>
            </div>
        </section>
    );
};

export default Footer;