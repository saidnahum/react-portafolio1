import React, { useContext } from 'react';
import Sun from '../img/sun.png';
import Moon from '../img/moon.png';
import { ThemeContext } from '../context';


export const Toggle = () => {

   const theme = useContext(ThemeContext);

   const handleClick = () => {
      theme.dispatch({type: "TOGGLE"})
   }

   return (
      <div className="w-14 h-6 rounded-2xl border border-gray-400 bg-white fixed top-3 right-3 z-50 flex items-center justify-around">
         <img 
            src={Sun}
            className="w-4 h-4" 
         />
         <img 
            src={Moon} 
            className="w-4 h-4" 
         />
         <div onClick={handleClick} className={`w-6 h-6 rounded-full bg-gray-500 absolute cursor-pointer ${theme.state.darkMode ? 'left-0' : 'right-0'}`}>
            <button  className=""></button>
         </div>
      </div>
   )
}
