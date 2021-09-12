import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { AiOutlineVideoCamera } from 'react-icons/ai';
import { GiSwordman } from 'react-icons/gi';
// import {SIGNUPLINK} from './utils'
// import HeroSectionfaq from './HeroSection-faq';

function Pricing() {
  // const homeObjFour = {
  //   lightBg: false,
  //   lightText: true,
  //   lightTextDesc: true,
  //   topLine: 'STILL HAVE QUESTIONS?',
  //   headline: 'We are here to help!',
  //   description:
  //     'Simply check out our FAQ for more information. You can also email us at hello@hire.sg!',
  //   buttonLabel: 'FAQ',
  //   imgStart: 'start',
  //   img: '/4.png',
  //   alt: 'Vault'
  // };
  return (
    <>
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Hire-X</h1>
          <div className='pricing__container'>
            <div className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h3>HR Database</h3>
                <ul className='pricing__container-features'>
                  <li></li>
                </ul>
                <p>A repository of the latest happenings in HR for accounting-related fields</p>

                <Button buttonSize='btn--wide' buttonColor='green'>
                  Hire-X
                </Button>
              </div>
            </div>
            <div className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiSwordman />
                </div>
                <h3>Written by Pros</h3>
                <ul className='pricing__container-features'>
                  <li></li>
                </ul>
                <p>Our articles are contributed by leading HR professionals and accountants</p>
                <Button buttonSize='btn--wide' buttonColor='green'>
                Hire-X
                </Button>
              </div>
            </div>
            <div to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <AiOutlineVideoCamera />
                </div>
                <h3>Contribute</h3>
                <ul className='pricing__container-features'>
                  <li></li>
                </ul>
                <p>Contact us at hello@hire.sg to write for us!</p>
                <Button buttonSize='btn--wide' buttonColor='green'>
                Hire-X
                </Button>
              </div>
            </div>
          </div>
        </div>

        
        
      </div>
    </IconContext.Provider>
    {/* <HeroSectionfaq {...homeObjFour} /> */}
    </>
  );
}
export default Pricing;
