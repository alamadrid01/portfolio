import React from 'react'
import './back.scss'
import arrow from './arrow.png'

function Back() {
  return (
    <div className="fixed" >
        <div className='back'>
            <a href="#"><img src={arrow} alt="arowUp" /></a>
        </div>
    </div>
  )
}

export default Back
