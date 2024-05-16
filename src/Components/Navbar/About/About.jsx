import React from 'react'
import './About.css'
import about_img from '../../../images/about.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className="about-img"/>
        </div>
        <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
        Princeton is one of the top ranking universities in India with over 52,000
         full time students and more than 3200 faculty across all the campuses – Kattankulathur, Ramapuram, Vadapalani
          Campus – all in and around Chennai, Tiruchirappalli (in TN), Modinagar (in UP) & Sonepat (in Haryana) – 
          both of which are located near Delhi NCR, Amaravati (in AP), Gangtok (in Sikkim) – offering a wide range
           of undergraduate, postgraduate and doctoral programs in six Faculties – Engineering & Technology, Management, 
           Medicine & Health sciences, Science & Humanities, Law and Agricultural Sciences
        </p>
        <p>
        To emerge as a World – Class University in creating and disseminating knowledge and providing students a unique learning experience in Science, Technology,
         Medicine, Management and other areas of Scholarship that will best serve the world and for the betterment of mankind
        </p>
         </div>
    </div>
  )
}

export default About