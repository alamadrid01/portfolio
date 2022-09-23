import React,{useState, useEffect} from 'react'
import './sectionOne.scss'
import pics from './me.jpg'
import twitter from './twitter.png'
import whatsapp from './whatsapp.png'
import instagram from './instagram.png'
import Animation from '../animation/Animation'
import MovingComponent from 'react-moving-text'

function SectionOne() {

    const [data, dataF] = useState(true)
    useEffect(()=>{
        const tick = ()=> {
             dataF(false)
            }
        const interval = setTimeout(tick, 5000)

        return () =>{
            clearTimeout(interval)
        }
    })

    const Letters = [
        "hello", 'world'
    ]


  return (
    <div className='w'>
        <Animation  />
        
        <div className="sectionOne" id='home'>
            <div className="text">
                    <MovingComponent
                        type="blur"
                        duration="1300ms"
                        delay="index * 100ms"
                        direction="alternate"
                        timing="ease-in-out"
                        iteration="2"
                        fillMode="none">
                            <h1>Hi! I am</h1>
                    </MovingComponent>
                    {
                        data ? 
                        <MovingComponent
                          type="slideInFromLeft"
                          duration="2000ms"
                          delay="index * 100ms"
                          direction="normal"
                          timing="ease"
                          iteration="5"
                          fillMode="none">
                          <span>Adebayo Al-ameen</span>
                        </MovingComponent> : 
                        <span>Adebayo Al-ameen</span>
                    }
                    <p>A CS student, Electrical Engineer and an Aspiring Software Engineer to dethrone World Tech Giants like</p>
                    <div className="hire">
                    Hire me
                    </div>
                </div>
                

                <div className="shape">
                    <div className="picture">
                        
                            <div className="service">
                            <span>Front-end Devloper</span>
                            </div>
                            
                    <div className="service">
                        <span>Back-end Developer</span>
                    </div>
                        <img src= {pics} alt="profile" />
                    </div>
                </div>
      </div>
                <div className="logo">
                    <div className="twitter"> <a href="https://twitter.com/AdebayoAlameen?t=3L1ljJkyQUhndD4AviGltg&s=09"><img src={twitter}  alt="icon" /></a></div>
                    <div className="whatsapp"> <a href="https://api.whatsapp.com/send?phone=+234 813 689 4051&text=hi"><img src= {whatsapp} alt="icon" /></a>  </div>
                    <div className="instagram"><a href="https://instagram.com/alamadrid_d"> <img src= {instagram} alt="icon" /></a></div>
                </div>
                
                <div className="waves">
                
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L60,154.7C120,181,240,235,360,229.3C480,224,600,160,720,138.7C840,117,960,139,1080,170.7C1200,203,1320,245,1380,266.7L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                </div>
    </div>
  )
}

export default SectionOne