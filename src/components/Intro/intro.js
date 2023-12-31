import  React from 'react';
import './intro.css';
import bg from '../../assets/My_Assets/bgMike.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello</span>
                <span className="introText">I'm <span className="introName">Michael Davis</span> <br />Software Developer</span>
                <p className="introPara">I'm an aspiring software developer driven by a passion for innovation and a commitment to make a positive impact on the world through technology. I aim to inspire those around me to be the best versions of themselves, pushing the limits of what's possible and to craft a future where innovation meets purpose!</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire" className="btnImg" />Hire Me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    )
}

export default Intro;