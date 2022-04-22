import React from 'react';
import './experience.css';
import {BsPatchCheck} from 'react-icons/bs';


const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className="container experience">
                <div className="experience__widget experience__fe">
                    <div className="experience__widget--title">
                        <h3>Frontend Development</h3>
                    </div>
                    <div className="experience__widget--content">
                        <div className="experience__widget--content__item">
                            <div className="experience__widget--content__item--logo">
                                <BsPatchCheck /> 
                            </div>
                            <div className="experience__widget--content__item--detail">
                                <h4>HTML</h4>
                                <p>Experienced</p> 
                            </div>
                        </div>
                        <div className="experience__widget--content__item">
                            <div className="experience__widget--content__item--logo">
                                <BsPatchCheck /> 
                            </div>
                            <div className="experience__widget--content__item--detail">
                                <h4>CSS</h4>
                                <p>Experienced</p> 
                            </div>
                        </div>
                        <div className="experience__widget--content__item">
                            <div className="experience__widget--content__item--logo">
                                <BsPatchCheck /> 
                            </div>
                            <div className="experience__widget--content__item--detail">
                                <h4>Javascript</h4>
                                <p>Experienced</p> 
                            </div>
                        </div>
                        <div className="experience__widget--content__item">
                            <div className="experience__widget--content__item--logo">
                                <BsPatchCheck /> 
                            </div>
                            <div className="experience__widget--content__item--detail">
                                <h4>Reactjs</h4>
                                <p>Experienced</p> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="experience__widget experience__be">
                    <div className="experience__widget--title">
                        <h3>Backend Development</h3>
                    </div>
                    <div className="experience__widget--content">
                        <div className="experience__widget--content__item">
                            <div className="experience__widget--content__item--logo">
                                <BsPatchCheck /> 
                            </div>
                            <div className="experience__widget--content__item--detail">
                                <h4>Java</h4>
                                <p>Experienced</p> 
                            </div>
                        </div>
                        <div className="experience__widget--content__item">
                            <div className="experience__widget--content__item--logo">
                                <BsPatchCheck /> 
                            </div>
                            <div className="experience__widget--content__item--detail">
                                <h4>SQL Server</h4>
                                <p>Experienced</p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Experience;