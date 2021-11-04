import React from 'react'
import { Product } from './Product'
import { products } from '../data';

export const ProductList = () => {
   return (
      <div className="px-14 py-28 flex flex-col items-center text-center">
         <div className="w-7/12">
            <h1 className="text-6xl font-semibold">Create & inspire. It's Lama</h1>
            <p className="my-10 w-full px-20">
               Lama is a creative portfolio that your work has been waiting for.
               Beautiful homes, stunning portfolio styles & a whole lot more awaits
               inside. 
            </p>
         </div>

         <div className="grid grid-cols-12 w-full gap-10 px-32">
            {
               products.map(product => (
                  <Product img={product.img} key={product.id} link={product.link}/>
               ))
            }
         </div>
      </div>
   )
}
