import React from "react";
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I Do</span>
            <span className="skillDescription">I'm a creative mind passionate about UI/UX design, web design, and app design. I love to explore new coding principles and languages to broaden my skills and contribute to innovative projects. As a dedicated enthusiast in smart grids and electric vehicles, I'm excited about merging design with sustainable technology to shape a greener future.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX design</h2>
                        <p>I have over 2 years of experience creating web/app mockups, flyers, and graphics using resources like Figma and Canva. I really love the artform of beautifully designed user interface layouts. </p>
                    </div>
                </div>
            </div>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Website design</h2>
                        <p>I am deeply captivated by the dynamic world of web design, where creativity converges with technology to craft engaging and seamless digital experiences. The ability to shape online landscapes and enhance user interactions fuels my passion for contributing to the ever-evolving field of web design.</p>
                    </div>
                </div>
            </div>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App design</h2>
                        <p>This is what stated it all, I'll never forget the first app I made in my highschool's AP Computer science class. That class project sparked a very bright and curious flame in me to conintue developing and creating.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;