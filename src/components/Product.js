import React from 'react';

export const Product = ({ img, link }) => {
   return (
      <div className="w-full h-40v mx-5 my-3 border-2 rounded-tl-xl rounded-tr-xl overflow-hidden col-span-4">
         <div className="h-5 bg-gray-100 flex items-center sticky z-50">
            <div className="w-2 h-2 rounded-lg bg-white mx-1"></div>
            <div className="w-2 h-2 rounded-lg bg-white mx-1"></div>
            <div className="w-2 h-2 rounded-lg bg-white mx-1"></div>
         </div>
         <a href={link} target="_blank" rel="noreferrer"> 
            <img src={img} alt="" className="w-full h-full object-cover transition-all duration-1000 ease-linear transform hover:-translate-y-7"/>
         </a>
      </div>
   )
}
