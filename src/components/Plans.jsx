import React from "react";
import Chart from "../assets/Chart.png";
import Msg from "../assets/Msg.png";
import Inbox from "../assets/Inbox.png";
import Banner from "../assets/Banner.png";
import { motion } from "framer-motion";

const Plans = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full overflow-hidden" id="Plans">
      <div className="relative w-full xl:mt-24 ">
        <motion.img 
          initial={{opacity: 0, x:200}}
          transition={{duration: 1}}
          whileInView={{opacity: 1, x:0}}
          viewport={{once:true}} 
        className="xl:mr-72 mx-auto" src={Chart} alt="" />
        <motion.img 
          initial={{opacity: 0, x:-200}}
          transition={{duration: 1}}
          whileInView={{opacity: 1, x:0}}
          viewport={{once:true}}
        className="xl:ml-56" src={Msg} alt="" />
        <motion.div 
          initial={{opacity: 0, y:100}}
          transition={{duration: 1.5}}
          whileInView={{opacity: 1, y:0}}
          viewport={{once:true}}
        className="xl:py-8 xl:flex bg-blue-100 xl:mx-28 rounded-3xl" id="More">
          {/* Text Section */}
          <div className="xl:flex-1 xl:max-w-1/2 xl:pr-6 text-center xl:text-left">
            <h3 className="text-gray-800 text-3xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold xl:ml-20 xl:mt-12 pt-5 sm:max-w-2/1 sm:flex-1 mx-auto">
              Seamless Collaboration for Healthcare Teams
            </h3>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl xl:text-1xl xl:max-w-1/3 mt-4 sm:mt-8 md:mt-5 mx-auto sm:max-w-sm md:max-w-md xl:ml-20">
              With shared inboxes, any team member can resolve the team’s
              pending tasks. Individual staff members don’t get overwhelmed, and
              patients are always taken care of.
            </p>
          </div>

          {/* Image Section */}
          <img className="xl:w-1/2 xl:mr-20 mt-5" src={Inbox} alt="Inbox" />
        </motion.div>
        <img 
        className="xl:w-fit xl:ml-44 xl:mt-20 mt-5" src={Banner} alt="" />
      </div>
    </div>
  );
};

export default Plans;
