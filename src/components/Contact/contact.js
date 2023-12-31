import React, { useRef } from "react";
import './contact.css'
//import Lane from '../../assets/walmart.png'
//import Luminosity from '../../assets/adobe.png'
//import Kappa from '../../assets/microsoft.png'
//import FedEx from '../../assets/facebook.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YoutubeIcon from '../../assets/youtube.png'
import InstgramIcon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ogdsg4o', 'template_jpj1rcf', form.current, '4itJEhcZm2etqtPmt')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent !');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id='contactPage'>
            {/* <div id='clients'>
                <h1 className="contactPageTitle">My Clients</h1>
                <p className='clientDesc'>
                    I have had the opportunity to work for a diverse group of companies and organizations.
                </p>
                <div className="clientImgs">
                    <img src={Lane} alt="" className="clientImg" />
                    <img src={Luminosity} alt="" className="clientImg" />
                    <img src={Kappa} alt="" className="clientImg" />
                    <img src={FedEx} alt="" className="clientImg" />
                </div>
    </div> */}
            <div id='contact' >
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name='from_name' />
                    <input type="email" className="email" placeholder="Your Email" name='from_email' />
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message" />
                    <button type="submit" value='Send' className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={FacebookIcon} alt="Facebook" className="link" />
                        <img src={TwitterIcon} alt="Twitter" className="link" />
                        <img src={YoutubeIcon} alt="Youtube" className="link" />
                        <img src={InstgramIcon} alt="Instagram" className="link" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact