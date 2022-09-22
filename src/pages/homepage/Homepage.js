import React, {useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Back from '../../components/reset/Back'
import SectionFour from '../../components/sectionFour/SectionFour'
import SectionOne from '../../components/sectionOne/SectionOne'
import SectionThree from '../../components/sectionThree/SectionThree'
import SectionTwo from '../../components/sectionTwo/SectionTwo'
import './homepage.scss'


function Homepage() {

 useEffect(()=>{
    document.title= 'Welcome'
 }, [])
  return (
    <div className='homepage'>
      <div className="navbarContainer">
        <Navbar />
      </div>  
      <SectionOne />
      <div className="section">
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <Back />
      </div>
    </div>
  )
}

export default Homepage