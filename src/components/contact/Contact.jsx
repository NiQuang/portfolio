import React from 'react';
import './contact.css';
import {AiOutlineMail, AiOutlineWhatsApp} from 'react-icons/ai';
import {RiMessengerLine} from 'react-icons/ri';

const Contact = () => {
    return (
        <section id='contact'>
            <h5>get in touch</h5>
            <h2>Contact Me</h2>

            <div className="contact container">
                <div className="contact__social">
                    <div className="contact__social--item">
                        <div className="contact__social--item__logo">
                            <AiOutlineMail />
                        </div>
                        <div className="contact__social--item__title">
                            Email
                        </div>
                        <div className="contact__social--item__content">
                            support@gmail.com
                        </div>
                        <div className="contact__social--item__action">
                            <p>Send a message</p>
                        </div>
                    </div>
                    <div className="contact__social--item">
                        <div className="contact__social--item__logo">
                            <RiMessengerLine />
                        </div>
                        <div className="contact__social--item__title">
                            Messenger
                        </div>
                        <div className="contact__social--item__content">
                            quang.51112
                        </div>
                        <div className="contact__social--item__action">
                            <p>Send a message</p>
                        </div>
                    </div>
                    <div className="contact__social--item">
                        <div className="contact__social--item__logo">
                            <AiOutlineWhatsApp />
                        </div>
                        <div className="contact__social--item__title">
                            WhatsApp
                        </div>
                        <div className="contact__social--item__content">
                            123-4567-890
                        </div>
                        <div className="contact__social--item__action">
                            <p>Send a message</p>
                        </div>
                    </div>
                </div>
                <div className="contact__form">
                    <input type="text" placeholder='Your Full Name'/>
                    <input type="text" placeholder='Your Email'/>
                    <textarea placeholder='Your Message'/>
                    <div className="contact__form--action btn">
                        Send Message
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Contact;