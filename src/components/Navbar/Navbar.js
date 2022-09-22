import React from 'react'
import './navbar.scss'

function Navbar () {

  return (
    <div className='navbar'>
        <div className="left">
            <span>Welcome</span>
        </div>

        <div className="right">
            <ul>
                <li><a className='aLink' href='#services'>Services</a></li>
                <li><a className='aLink' href='#experience'>Experience</a></li>
                <li><a className='aLink' href='#testimonials'>Testimonials</a></li>
            </ul>
            <div className="contact">
                <span> <a className='aLink' href='#contact'>Contact me</a></span>
            </div>
        </div>
    </div>
  )
}

export default Navbar