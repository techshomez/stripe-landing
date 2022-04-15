import React from 'react';
import {FaChevronRight} from 'react-icons/fa';
import phoneImg from '../../images/phone.svg';
import { useGlobalContext } from '../../context';
import './hero.css';

const Hero = () => {
    const {closeSubmenu} = useGlobalContext();
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
        <div className='hero-center'>
            <article className='hero-info'>
                <h1>
                    Payments infrastructure <br />
                    for the internet
                </h1>
                <p className='hero-text'>
                    Millions of companies of all sizes—from startups to Fortune 500s—use 
                    Stripe’s software and APIs to accept payments, send payouts, 
                    and manage their businesses online.
                </p>
                <span className='group'>
                    <button className='btn'>
                        Start now {" "}
                        <span className='right-arrow'>
                            <FaChevronRight />
                        </span>
                    </button>
                    <div className='contact'>
                        Contact sales {" "}
                        <span className='right-arrow'>
                            <FaChevronRight />
                        </span>
                    </div>
                </span>
            </article>
            <article className='hero-images'>
                <img src={phoneImg} alt='' />
            </article>
        </div>
    </section>
  );
}

export default Hero;