import React from 'react'
import './sectionThree.scss'
import a from './first.jpg'
import b from './second.png'
import c from './third.png'
import d from './fourth.png'



function SectionThree() {
  return (
    <div className="main" id='experience'>
    <div className='sectionThree'>
        <div className="text">
            <h1>Worked for all these</h1>
            <span>Brands & Clients</span>
            <p>The services i offer includes Web design, App design, App Automation and Data Analysis</p>
        </div>

        <div className="shape">
            <div className="whole">
                <div className="comp"><img src= {b} alt="" /></div>
                <div className="comp"><img src= {a} alt="" /></div>
                <div className="comp"><img src= {c} alt="" /></div>
                <div className="comp"><img src= {d} alt="" /></div>
            </div>
        </div>
    </div>
    <div className="experience">
        <div className="hold">
        <div className="trans">
            <div className="text">
                <span>2+</span>
            </div>
        </div >
        <div className="ex">
        <h1>years</h1>
        <span className='word'>Experience</span>
        </div>
        </div>

        <div className="hold">
        <div className="trans">
            <div className="text">
                <span>8</span>
            </div>
        </div>
        <div className="ex">
        <h1>completed</h1>
        <span className='word'>Project</span>
        </div>
        </div>
        
        <div className="hold">
        <div className="trans">
            <div className="text">
                <span>2</span>
            </div>
        </div>
        <div className="ex">
        <h1>companies</h1>
        <span className='word'>Worked for</span>
        </div>
        </div>
    </div>
    <div className="waves">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L48,186.7C96,181,192,171,288,160C384,149,480,139,576,154.7C672,171,768,213,864,208C960,203,1056,149,1152,138.7C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    </div>
    </div>
  )
}

export default SectionThree