import React, {useState} from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineMessage } from 'react-icons/ai';
import { BsAward, BsCardList } from 'react-icons/bs';
import './nav.css';

const Nav = () => {
  const [active, setActive] = useState('#')


  return (
    <div className='nav'>
      <div className={`nav__item ${active === '#' ? 'active': ''}`} onClick={() => { setActive('#')}}>
        <a href="#">
          <AiOutlineHome />
        </a>
      </div>
      <div className={`nav__item ${active === '#about' ? 'active': ''}`} onClick={() => { setActive('#about')}}>
        <a href="#about">
          <AiOutlineUser />
        </a>
      </div>
      <div className={`nav__item ${active === '#experience' ? 'active': ''}`} onClick={() => { setActive('#experience')}}>
        <a href="#experience">
          <BsAward />
        </a>
      </div>
      <div className={`nav__item ${active === '#portfolio' ? 'active': ''}`} onClick={() => { setActive('#portfolio')}}>
        <a href="#portfolio">
          <BsCardList />
        </a>
      </div>
      <div className={`nav__item ${active === '#contact' ? 'active': ''}`} onClick={() => { setActive('#contact')}}>
        <a href="#contact">
          <AiOutlineMessage />
        </a>
      </div>

    </div>
  )
}

export default Nav
