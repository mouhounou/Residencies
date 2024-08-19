import React, { useState } from 'react'
import logo from '../../../public/logo.png'
import './header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'



const getMenustyles = (menuOpened) => {
   if (document.documentElement.clientWidth <= 800)
   {
      return {right: !menuOpened && "-100%"}
   }
}



function Header() {

   const [menuOpened, setMenuOpend] = useState(false)
   return (
      <>
         <section className="h-wrapper">
            <div className="flexCenter innerWidth paddings h-container">
               <img src={logo} alt="" />

               <OutsideClickHandler
                  onOutsideClick={() => setMenuOpend(false)}
               >
                  <div className="h-menu flexCenter"
                     style={getMenustyles(menuOpened)}
                     >
                     <a href="">Residencies</a>
                     <a href="">Our values</a>
                     <a href="">Contact us</a>
                     <a href="">Get started</a>
                     <button  className='button'>
                        <a href=""> Contact</a>
                     </button>
                  </div>
               </OutsideClickHandler>
               
               <div className="menu-icon" onClick={() => setMenuOpend((prev) => !prev)}>
                  <BiMenuAltRight size={30}/>
               </div>
            </div>

         </section>
      </>
   )
}

export default Header
