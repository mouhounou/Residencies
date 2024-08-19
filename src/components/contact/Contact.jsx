import React from 'react'
import './contact.css'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs';
import {  FaVideo } from "react-icons/fa6";


function Contact() {
   return (
      <section className='c-wrapper'>
         <div className="paddings innerWidth flexCenter c-container">
.
            {/* left side */}
            <div className=" flexColStart c-left">
               <span className='orangeText'>Our contact</span>
               <span className='primaryText'>Easy to contact us</span>
               <span className='secondaryText'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit corporis quo neque officiis magnam eaque.
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit corporis quo neque officiis magnam eaque.
               </span>

               <div className="flexColStart contactModes">
                  
                  {/* first row */}
                  <div className="flexStart row">
                     
                     <div className="flexColCenter mode">
                        <div className="flexStart">
                           <div className="flexCenter icon">
                              <MdCall size={25}/>
                           </div>
                           <div className="flexColStart detail">
                              <span className='primaryText'>Call</span>
                              <span className='secondaryText'>06 222 33 11</span>
                           </div>
                        </div>
                        <div className="flexCenter button">Call Now</div>
                     </div>

                     {/* second mode */}

                     <div className="flexColCenter mode">
                        <div className="flexStart">
                           <div className="flexCenter icon">
                              <BsFillChatDotsFill size={ 25} />
                           </div>
                           <div className="flexColStart detail">
                              <span className='primaryText'>Chat</span>
                              <span className='secondaryText'>06 222 33 11</span>
                           </div>
                        </div>
                        <div className="flexCenter button">Chat Now</div>
                     </div>
                  </div>
                  
                  {/* second row */}
                  <div className="flexStart row">
                     
                     <div className="flexColCenter mode">
                        <div className="flexStart">
                           <div className="flexCenter icon">
                              <FaVideo size={25}/>
                           </div>
                           <div className="flexColStart detail">
                              <span className='primaryText'>video Call</span>
                              <span className='secondaryText'>06 222 33 11</span>
                           </div>
                        </div>
                        <div className="flexCenter button">Call Now</div>
                     </div>

                     {/* second mode */}

                     <div className="flexColCenter mode">
                        <div className="flexStart">
                           <div className="flexCenter icon">
                              <BsFillChatDotsFill size={ 25} />
                           </div>
                           <div className="flexColStart detail">
                              <span className='primaryText'>Chat</span>
                              <span className='secondaryText'>06 222 33 11</span>
                           </div>
                        </div>
                        <div className="flexCenter button">Chat Now</div>
                     </div>
                  </div>
               </div>
            </div>

            {/* right side */}
            <div className="c-right">
               <div className="image-container">
                  <img src='./contact.jpg'></img>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Contact
