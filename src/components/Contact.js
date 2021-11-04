import Phone from '../img/phone.png';
import Email from '../img/email.png';
import Address from '../img/address.png';
import { useContext, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { ThemeContext } from '../context';

export const Contact = () => {

   const formRef = useRef();

   const [done, setDone] = useState(false);

   const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

   const handleSubmit = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_0e5quqc', 'template_dxmkrbh', formRef.current, 'user_IUweXNCwSiXxtBntLc4s6')
         .then((result) => {
            console.log(result.text);
            setDone(true);
         }, (error) => {
            console.log(error.text);
         });
   }

   

   return (
      <div className="h-screen relative">
         <div className="w-5 h-full  bg-custom-green absolute"></div>
         <div className="p-14 flex">
            <div className="flex-1 ml-5">
               <h1 className="text-8xl w-4/5 font-bold leading-normal">Let's discuss your project</h1>
               <div className="mt-20 space-y-20 w-2/5 text-xl">
                  <div className="flex items-center">
                     <img src={Phone} alt="" className="w-9 h-9 mr-5" /> +52 5539846587
                  </div>
                  <div className="flex items-center">
                     <img src={Email} alt="" className="w-9 h-9 mr-5" /> contact@pixelweb.com
                  </div>
                  <div className="flex items-center">
                     <img src={Address} alt="" className="w-9 h-9 mr-5" /> Av. Jacarandas 56, Col. Centro, Poza Rica, Ver.
                  </div>
               </div>
            </div>

            <div className="flex-1 mt-10">
               <p className="font-normal text-2xl">
                  <b>What’s your story?</b> Get in touch. Always available for
                  freelancing if the right project comes along. me.
               </p>

               <form ref={formRef} onSubmit={handleSubmit} className="mt-5 flex flex-col space-y-10">
                  <input className={`w-2/4 p-2 h-12 border-b-2 border-gray-500 my-3 focus:outline-none ${darkMode && 'bg-gray-700 border-none rounded-lg'}`} type="text" placeholder="Name" name="user_name" required autoComplete="off"/>
                  <input className={`w-2/4 p-2 h-12 border-b-2 border-gray-500 my-3 focus:outline-none ${darkMode && 'bg-gray-700 border-none rounded-lg'}`} type="text" placeholder="Subject" name="user_subject" required autoComplete="off"/>
                  <input className={`w-2/4 p-2 h-12 border-b-2 border-gray-500 my-3 focus:outline-none ${darkMode && 'bg-gray-700 border-none rounded-lg'}`} type="email" placeholder="Email" name="user_email" required autoComplete="off"/>
                  <textarea 
                     rows="5" 
                     placeholder="Message" 
                     name="message"
                     className={`w-full border border-gray-500 p-5 mt-5 rounded-lg focus:outline-none ${darkMode && 'bg-gray-700 border-none'}`}
                     required
                  ></textarea>

                  <div className="flex items-center">
                     <button type="submit" className="mr-5 rounded-lg bg-custom-green text-white px-2 py-3 inline-block w-24 cursor-pointer font-bold">Submit</button>
                     {
                        done && (
                           <p className="text-base text-green-600">Mail sent successfully !!</p>
                        )
                     }
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}
