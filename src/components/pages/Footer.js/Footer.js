import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa';
// import {IGLINK,FBLINK,YTLINK} from '../../utils'

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Hire.sg Telegram Group to receive the latest news
        </p>

            <Button buttonStyle='btn--outline'>
              <a href="https://t.me/hire.sg" className="link">
              Telegram
              </a>
              </Button>

      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Directory</h2>
            <Link to='/'>Hire</Link>
            <Link to='/event'>Hire-X</Link>
            <Link to='/terms'>Hire-Y</Link>
            <Link to='/faq'>Our Story</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <a href='/'>Instagram</a>
            <a href='/'>Facebook</a>
            <a href='/'>Youtube</a>
          </div>
        </div>
        {/* <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Organisers</h2>
            <a href="http://pa.gov.sg">People's Association</a>
            <a href={FBLINK}>Woodlands Youth Network</a>
          </div>
        </div> */}
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src="/logo-White.png" alt="" className='navbar-icon'/>
            </Link>
          </div>
          <small className='website-rights'>Hire.sg © 2021</small>
          <div className='social-icons'>
            <a href='/'
              className='social-icon-link'
              to='/'
              aria-label='Facebook'
            >
              <FaFacebook />
              </a>
              <a href='/'
              className='social-icon-link'
              to='/'
              aria-label='Instagram'
            >
              <FaInstagram />
              </a>
              <a href='/'
              className='social-icon-link'
              to='/'
              aria-label='Youtube'
            >
              <FaYoutube />
              </a>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
