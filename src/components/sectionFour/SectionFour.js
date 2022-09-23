import React, { Component } from 'react'
import Animation from '../animation/Animation'
import './sectionFour.scss'
import computer from './computer.png'

export class SectionFour extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         firstName: '',
         lastName: '',
         email: '',
         number: '',
         message: ''
      }
    }
    
    handler= (e)=>{
        this.setState({
         [e.target.name]: e.target.value
        })
    }

    submit =(e) =>{
        e.preventDefault()
        alert('successfully sent')
    }

  render() {
    const {firstName, lastName, email, number, message} = this.state
    return (
      <div>
      <div className="sectionFour">
        <h1 id='contact'>Get in Touch</h1>
        <div className="contact">
            <div className="shape">
              <img src={computer} alt="" />
            </div>

            <div className="text">
                <form onSubmit={this.submit} >
                    <div className="a">
                        <input type="text" required placeholder='First Name' value={firstName} name= 'firstName' onChange={this.handler} />
                        <input type="text" required placeholder='Last Name' value={lastName} name= 'lastName' onChange={this.handler} />
                    </div>
                    <div className="a">
                        <input type="email" required placeholder='Email Address' value={email} name= 'email' onChange={this.handler} />
                        <input type="" required placeholder='Phone Number' value={number} name= 'number' onChange={this.handler} />
                    </div>
                    <div className="b">
                        <input className='message' required type="text" placeholder='Message' value={message} name='message' onChange={this.handler} />
                    </div>
                    <button type="submit"><span>Send</span></button>
                </form>
            </div>
        </div>
      </div>
    </div>
    )
  }
}

export default SectionFour

