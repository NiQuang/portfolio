import React from 'react';
import './about.css';
import ME from '../../assets/imgs/about-me.JPG';
import { BsAward, BsCardList } from 'react-icons/bs';
import { FaNetworkWired } from 'react-icons/fa';

const About = () => {
    return (
        <section id='about' className='container'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="about">
                <div className="about__img">
                    <img src={ME} alt="About me" className='about__img--me' />
                </div>
                <div className="about__detail">
                    <div className="about__card">
                        <div className="about__card--item">
                            <div className="about__card--item__icon">
                                <BsAward />
                            </div>
                            <div className="about__card--item__title">
                                Experience
                            </div>
                            <div className="about__card--item__content">
                                Fresher Front-end Reactjs
                            </div>
                        </div>
                        <div className="about__card--item">
                            <div className="about__card--item__icon">
                                <FaNetworkWired />
                            </div>
                            <div className="about__card--item__title">
                                Clients
                            </div>
                            <div className="about__card--item__content">
                                200+ Worldwide
                            </div>
                        </div>
                        <div className="about__card--item">
                            <div className="about__card--item__icon">
                                <BsCardList />
                            </div>
                            <div className="about__card--item__title">
                                Project
                            </div>
                            <div className="about__card--item__content">
                                10+ Project
                            </div>
                        </div>
                    </div>
                    <div className="about__content">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </div>
                </div>
                <div className="about__contact">
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
};

export default About;