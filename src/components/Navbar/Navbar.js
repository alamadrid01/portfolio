import React, { useState } from 'react'
import './navbar.scss'
import MovingComponent from 'react-moving-text'
import HigherComponent from '../higherComponent/HigherComponent'
import menu from './menu.png'
import cancel from './delete.png'



function Navbar (props) {
  const {matches, setMatches} = props;
  
  const [picture, pictureF] = useState(menu);
  const [display, displayF]= useState(false);

  const clickHandler =() =>{
    if(picture == menu) {
      pictureF(cancel)
      displayF(!display)
      
    }else if (picture !== menu ){
      pictureF(menu)
      displayF(!display)
    }
  }


  
  return (
    <div className='navbar'>
        <div className="left">
        <MovingComponent
                type="slideInFromLeft"
                duration="1100ms"
                delay=".6s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                <span>Welcome</span>
                </MovingComponent>
        </div>

      {
        !matches ?   <div className="right" >
        <ul>
            <li><a className='aLink' href='#services'>Services</a></li>
            <li><a className='aLink' href='#experience'>Experience</a></li>
            <li><a className='aLink' href='#testimonials'>Testimonials</a></li>
        </ul>
        <div className="contact">
            <span> <a className='aLink' href='#contact'>Contact me</a></span>
        </div>
    </div>: <img onClick={clickHandler} src= {picture} alt="menu-bar" />
      }

      {
        display && <div className="slide right" >
        <ul>
            <li><a className='aLink' href='#services'>Services</a></li>
            <li><a className='aLink' href='#experience'>Experience</a></li>
            <li><a className='aLink' href='#testimonials'>Testimonials</a></li>
        </ul>
        <div className="contact">
            <span> <a className='aLink' href='#contact'>Contact me</a></span>
        </div>
    </div>
      }
    </div>
  )
}

export default HigherComponent(Navbar)