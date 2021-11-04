import React from 'react';
import Award from '../../src/img/award.png';

export const About = () => {
   return (
      <div className="h-screen flex items-center">
         <div className="flex-1 flex items-center justify-center relative h-full">
            <div className="w-3/5 h-70v rounded-3xl absolute top-14 left-14 bg-gray-900">

            </div>

            <div className="w-3/5 h-70v rounded-3xl relative overflow-hidden">
               <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80"
                  alt="developer"
                  className="w-full h-full object-cover"
               />
            </div>
         </div>

         <div className="flex-1">
            <h1 className="text-5xl">About Me</h1>
            <p className="my-5 text-xl font-bold">
               It is a long established fact that a reader will be distracted by the
               readable content.
            </p>
            <p className="text-xl">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
               minim veniam, quis nostrud exercitation ullamco laboris nisi ut
               aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
            </p>

            <div className="flex mt-14 items-center justify-around">
               <img
                  src={Award}
                  className="w-32 h-32 rounded-3xl"
               />
               <div className="w-3/5">
                  <h4 className="font-bold text-gray-400 mb-3 text-xl">International Design Awards 2021</h4>
                  <p className="text-xl">
                     Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
                     and fugit.
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}
