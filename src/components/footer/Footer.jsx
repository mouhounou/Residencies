import React from 'react'
import './footer.css'


function Footer() {
   return (
      <>
         <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">

               {/* left side */}
               <div className="flexColStart f-left">
                  <img src="./logo2.png" alt="" width={120} />
                  <div className="secondaryText">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     <br />
                     Lorem ipsum dolor sit amet consectetur adipisicing.
                  </div>
               </div>

               {/* right side */}

               <div className="flexColStart f-right">
                  <span className='primaryText'>Information</span>
                  <span className='secondaryText'>145 brazzaville, FL 4533, CG</span>

                  <div className="flexCenter f-menu">
                     <span>Property</span>
                     <span>Security</span>
                     <span>Product</span>
                     <span>About us</span>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Footer
