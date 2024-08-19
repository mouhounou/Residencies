import React from 'react'
import './res.css'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import 'swiper/css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'
import { HiChevronRight } from "react-icons/hi";
import { HiChevronLeft } from "react-icons/hi";

const SliderButtons = () => {
   const swiper = useSwiper()
   return (
      <div className="flexCenter r-buttons">
         <button onClick={() => swiper.slidePrev()}>
            <HiChevronLeft />
         </button>
         <button onClick={() => swiper.slideNext()}>
            <HiChevronRight />
         </button>
      </div>
   )
}

function Residencies() {
   return (
      <>
         <section className="r-wrapper">
            <div className="paddings innerWidth r-container">
               <div className="r-head flexColStart">
                  <span className='orangeText'>Best Choices</span>
                  <span className='primaryText'>Popular Residencies</span>
               </div>
               <Swiper className='topwap' {...sliderSettings}>
                  <SliderButtons />
                  {
                     data.map((card, i) => (
                        <SwiperSlide key={i}>
                           <div className="flexColStart r-card">
                              <img src={card.image} alt="home" />
                              <span style={{display:"flex", alignItems:"center"}} className="secondaryText">
                                 <span style={{color:"orange"}}>$</span>
                                 <span>{ card.price}</span>
                              </span>
                              <span className="primaryText">{ card.name}</span>
                              <span className="secondaryText">{ card.detail}</span>
                           </div>
                        </SwiperSlide>
                     ))
                  }
               </Swiper>
            </div>
            {/* Long text here */}
         </section>
      </>
   )
}

export default Residencies
