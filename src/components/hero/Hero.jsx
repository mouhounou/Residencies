import React from 'react'
import './hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'




function Hero() {
   return (
      <>
         <section className="hero-wrapper">
            <div className="padding innerWidth flexCenter hero-container ">
               
               {/* left */}
               <div className=" flexColStart hero-left">
                  <div className="hero-title">
                     <div className="orange-circle"></div>
                     <motion.h1
                        initial={{ y: "2rem", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                           duration: 2,
                           type:"spring"
                        }}
                     >
                        Discover <br />
                        Most suitable <br />
                        property
                     </motion.h1>
                  </div>

                  <div className="flexColStart hero-des">
                     <span className='secondaryText'>Find a variety of properties that suit you very easilty</span>
                     <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
                  </div>

                  <div className="flexCenter  search-bar">
                     <HiLocationMarker className='maker' />
                     <input type="text" placeholder="Search for a property" />
                     <button className="button">Search</button>
                  </div>

                  <div className="flexCenter stats">
                     
                     <div className="flexColCenter stat">
                        <span>
                           <CountUp start={8800} end={9000} duration={4} />
                           <span className='plus'>+</span>
                        </span>
                        <span className='secondaryText'>Premium products</span>
                     </div>
                     
                     
                     <div className="flexColCenter stat">
                        <span>
                           <CountUp start={1950} end={2000} duration={4} />
                           <span className='plus'>+</span>
                        </span>
                        <span className='secondaryText'>Happy customers</span>
                     </div>
                     
                     <div className="flexColCenter stat">
                        <span>
                           <CountUp start={0} end={28} duration={4}/>
                           <span className='plus'>+</span>
                        </span>
                        <span className='secondaryText'>Awad Winnings</span>
                     </div>

                  </div>
               </div>
               
               {/* right */}
               <div className="flexCenter hero-right">
                  <motion.div className="image-container"
                  initial={{x:"7rem", opacity:0}}
                  animate={{ x: 0, opacity: 1 }}
                     transition={{
                        duration: 2,
                        type:"spring"
                  }}
                  >
                     <img src="./hero-image.png" alt="" />
                  </motion.div>
               </div>
               
            </div>
         </section>
      </>
   )
}

export default Hero
