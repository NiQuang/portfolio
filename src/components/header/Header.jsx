import React from 'react';

import './header.css';
import CTA from './CTA';
import ME from '../../assets/imgs/me.jpg';
import { FaGithubSquare, FaYoutubeSquare, FaFacebookSquare } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <section className="container header__container">
        <h5>Hello I'm</h5>
        <h2>Quang Nguyen Ich</h2>
        <h5 className="text-light">Front-end Developer</h5>
        <CTA />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <div className="header__social">
          <div className="header__social--item">
            <a href="https://facebook.com" target="_blank">
              <FaFacebookSquare className='header__social--item__icon' />
            </a>
          </div>
          <div className="header__social--item">
            <a href="https://github.com" target="_blank">
              <FaGithubSquare className='header__social--item__icon' />
            </a>
          </div>
          <div className="header__social--item">
            <a href="https://instagram.com" target="_blank">
              <FaYoutubeSquare className='header__social--item__icon' />
            </a>
          </div>
        </div>
        <div className="header__scroll-down">
          <a href='#about'>
            scroll down
          </a>
        </div>
      </section>
    </header>
  )
}

export default Header