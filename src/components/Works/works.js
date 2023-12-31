import React from 'react'
import './works.css';
import Portfolio1 from '../../assets/My_Assets/laneApp.png'
import Portfolio2 from '../../assets/My_Assets/fedexTrans.png'
import Portfolio3 from '../../assets/My_Assets/hbcuComplex.png'
//import Portfolio4 from '../../assets/portfolio-4.png'
//import Portfolio5 from '../../assets/portfolio-5.png'
//import Portfolio6 from '../../assets/portfolio-6.png'

const Works = () => {
    return (
        <section id='works'>
            <h2 className='worksTittle'>My Portfolio</h2>
            <span className='worksDesc'>I take pride in paying attention to the smallest details.</span>
            <div className='worksImgs'>
              <div className='worksImgContainer'>
                <img src={Portfolio1} alt='' className='worksImg'/>
                <div className='worksText'>
                    <p>Description Here</p>
                    <button className='workBtn'>Show More</button>
                </div>
              </div>
              <div className='worksImgContainer'>
                <img src={Portfolio2} alt='' className='worksImg'/>
                <div className='worksText'>
                    <p>Description Here</p>
                    <button className='workBtn'>Show More</button>
                </div>
              </div>
              <div className='worksImgContainer'>
                <img src={Portfolio3} alt='' className='worksImg'/>
                <div className='worksText'>
                    <p>Description Here</p>
                    <button className='workBtn'>Show More</button>
                </div>
              </div>
                {/*
                <img src={Portfolio4} alt='' className='worksImg'/>
                <img src={Portfolio5} alt='' className='worksImg'/>
                <img src={Portfolio6} alt='' className='worksImg'/>
                */}
            </div>
            <button className='workBtn'>See More</button>
        </section>
    );
}

export default Works