import React, { useContext } from 'react';
import './intro.css';
import Me from '../../src/img/me3.png';
import { ThemeContext } from '../context';

export const Intro = () => {

   const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

   return (
      <div className='flex flex-col sm:flex-row h-screen'>
         <div className='flex flex-1 items-center justify-center'>
            <div className='p-14 h-2/5 flex flex-col justify-between'>
               <h2 className='text-3xl'>Hello, My name is</h2>
               <h1 className='text-6xl font-bold'>Jessica Burton</h1>

               <div className='h-14 overflow-hidden'>
                  <div className='h-full animate-move'>
                     <div className='h-14 text-3xl font-bold text-custom-green flex items-center'>Web Developer</div>
                     <div className='h-14 text-3xl font-bold text-custom-green'>UI/UX Designer</div>
                     <div className='h-14 text-3xl font-bold text-custom-green'>Pothographer</div>
                     <div className='h-14 text-3xl font-bold text-custom-green'>Writer</div>
                     <div className='h-14 text-3xl font-bold text-custom-green'>Content Creator</div>
                  </div>
               </div>

               <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, dolores! Laborum culpa esse eveniet error soluta debitis maxime et corrupti qui quod doloremque, assumenda numquam facilis eligendi impedit sequi nostrum?
               </p>
            </div>
            <svg
               width="75"
               height="75"
               viewBox="0 0 75 75"
               fill="none"
               stroke={`${darkMode ? 'white' : 'black'}`}
               className="i-scroll w-10 h-10 absolute bottom-5"
               xmlns="http://www.w3.org/2000/svg"
            >
               <g id="scroll">
                  <path
                     id="Vector"
                     d="M40.5 15L34.5 9L28.5 15"
                     stroke-width="3"
                     stroke-miterlimit="10"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
                  <path
                     id="Vector_2"
                     d="M28.5 24L34.5 30L40.5 24"
                     stroke-width="3"
                     stroke-miterlimit="10"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
                  <g id="Group">
                     <path
                        id="Vector_3"
                        d="M9 37.5H60"
                        stroke-width="3"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     />
                  </g>
                  <path
                     id="Vector_4"
                     d="M34.5 27V9"
                     stroke-width="2.9895"
                     stroke-miterlimit="10"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
                  <g id="Group_2">
                     <path
                        id="Vector_5"
                        d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                        stroke-width="3"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     />
                  </g>
               </g>
            </svg>
         </div>

         <div className='flex-1 relative'>
            <div className="i-bg absolute bg-custom-green w-full h-full top-0 right-0"></div>
            <img
               src={Me}
               alt="Image"
               className="w-10/12 h-full object-cover absolute"
            />
         </div>
      </div>
   )
}
