import React from 'react'
import './sectionTwo.scss'
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function SectionTwo() {
    const now = 80
  return (
    <>
    <div className='sectionTwo' id='services'>
        <div className="text">
            <div className="word">
                <h1>My Awesome</h1>
                <span>Services</span>
                <p>The services i offer include Wev development, Web design, App design, Software Engineering and Data Analysis</p>
            </div>

            <div className="cv">
                <span>Download CV</span>
            </div>
        </div>

        <div className="shape">
            <div className="top">
                <h3>Web Developer</h3>
                <span>HTML</span>
                <ProgressBar now={85} label={`${85}%`} animated />
                <span>CSS</span>
                <ProgressBar now={85} label={`${85}%`} animated />
                <span>Javascript</span>
                <ProgressBar now={80} label={`${80}%`} animated />
                <span>React JS</span>
                <ProgressBar now={90} label={`${90}%`} animated />

            </div>

            <div className="middle">
                <h3>Design</h3>
                <span>Canva</span>
                <ProgressBar now={60} label={`${60}%`} animated />
                <span>Photoshop</span>
                <ProgressBar now={50} label={`${50}%`} animated />
                <span>CorelDraw</span>
                <ProgressBar now={70} label={`${70}%`} animated />
            </div>
            
            <div className="bottom">
                <h3>UI/ UX</h3>
                    <span>Figma</span>
                <ProgressBar now={50} label={`${50}%`} animated />
                <span>Sketch</span>
                <ProgressBar now={50} label={`${50}%`} animated />
                <span>Lunacy</span>
                <ProgressBar now={40} label={`${40}%`} animated />
            </div>
            </div>

        </div>
        <div className="waves">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,256L120,250.7C240,245,480,235,720,192C960,149,1200,75,1320,37.3L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        </div>

        </>
  )
}

export default SectionTwo