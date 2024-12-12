import React from 'react';  
import Inbox from '../assets/Inbox.png';  
import Ratings from '../assets/Ratings.png';
import { motion } from 'framer-motion'; 

const Home = () => {  
  return (  
    <div className='flex flex-col items-center justify-center w-full overflow-hidden' >  
      {/* Tilted Gradient Background */}  
      <motion.div
        initial={{opacity: 0, y:100}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1, y:0}}
        viewport={{once:true}}
      className='relative w-full h-[70vh] flex flex-col items-center justify-center'id='Home' >  
          

        <div className="container text-center mx-auto pt-24 px-6 md:px-16 lg:px-24 text-black md:mt-8 mt-20">
            <h2 className="text-4xl sm:text-5xl md:text-[48px] lg:text-[64px] max-w-4xl mx-auto font-semibold leading-tight">
              Medical Software To Attract And
              <span className="font-bold"> Retain Patients</span>
            </h2>
          <p className='text-gray-600 mt-5 leading-relaxed'>  
            Patientgrid's communication platform helps improve <br />   
            patient experience while saving staff hours.  
          </p>  
          <button className='mt-5 bg-blue-500 text-white py-2 px-4 rounded'>  
            Start For Free  
          </button>  
        </div>  
      </motion.div>  
      
      {/* Inbox Image */}  
      <div className="relative w-full max-w-5xl md:-mt-8">  
        <div className="absolute inset-0 -inset-x-full h-4/5 bg-gradient-to-br from-blue-400 to-purple-600 transform-gpu rotate-[5deg] mt-24 z-0" />
        <img
          className="w-full h-auto shadow-sm border-blue-300 rounded-lg mt-20 relative z-10"
          src={Inbox}
          alt="Inbox"
        />  
      </div>
      <motion.div 
        initial={{opacity: 0, x:-200}}
        transition={{duration: 1}}
        whileInView={{opacity: 1, x:0}}
        viewport={{once:true}}
      className="relative w-full max-w-5xl mt-24 flex items-center">  
        {/* Image Section */}  
        <img src={Ratings} alt="Ratings" className="w-auto h-auto" />    
      </motion.div>
    </div>  
  );  
};  

export default Home;