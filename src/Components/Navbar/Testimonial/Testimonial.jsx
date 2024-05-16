import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from '../../../images/next-icon.png'
import back_icon from '../../../images/back-icon.png'
import user_1 from '../../../images/user-1.png'
import user_2 from '../../../images/user-2.png'
import user_3 from '../../../images/user-3.png'
import user_4 from '../../../images/user-4.png'


const Testimonial = () => {

    const slider= useRef();
    let tx=0;

  const  slideForward = () => {
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
  }

  const  slideBackward = () => {
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }


  return (
    <div className='testimonials'> 
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="img" />
                            <div>
                                <h3>Sherlin</h3>
                                <span>Princeton, Chennai</span>
                            </div>
                        </div>
                        <p>
                            Choosing to pursue my degree at Princeton was one of the best decisions I've ever made. The supportive
                            community, state-of-the-art facilities, and commitment to academic excellence have truly 
                            exceeded my expectations.
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="img" />
                            <div>
                                <h3>John</h3>
                                <span>Princeton, Chennai</span>
                            </div>
                        </div>
                        <p>
                            Choosing to pursue my degree at Princeton was one of the best decisions I've ever made. The supportive
                            community, state-of-the-art facilities, and commitment to academic excellence have truly 
                            exceeded my expectations.
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="img" />
                            <div>
                                <h3>Merlin</h3>
                                <span>Princeton, Chennai</span>
                            </div>
                        </div>
                        <p>
                            Choosing to pursue my degree at Princeton was one of the best decisions I've ever made. The supportive
                            community, state-of-the-art facilities, and commitment to academic excellence have truly 
                            exceeded my expectations.
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="img" />
                            <div>
                                <h3>Franklin</h3>
                                <span>Princeton, Chennai</span>
                            </div>
                        </div>
                        <p>
                            Choosing to pursue my degree at Princeton was one of the best decisions I've ever made. The supportive
                            community, state-of-the-art facilities, and commitment to academic excellence have truly 
                            exceeded my expectations.
                        </p>
                    </div>
                </li>


            </ul>
        </div>
    </div>
  )
}

export default Testimonial