import React from "react";
import { motion } from "framer-motion";
import eyeImage from "../assets/eye.jpg";
import bgImage from "../assets/bg.jpg";

function LandingPage() {

  const handleClick = () => {
    console.log("Button clicked!");
  }

  return (
    <div 
      data-scroll 
      data-scroll-speed="-.3" 
      className="w-full h-screen bg-zinc-900 pt-1"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="textstructure mt-52 px-20">
        {["If you can’t", "trust your eyes", "you can trust us!"].map((item, index) => {
          return (
            <div className="masker" key={index}>
              <div className="w-fit flex items-center overflow-hidden">
                {index === 1 && (
                  <motion.div 
                    initial={{ width: 0 }} 
                    animate={{ width: "10vw" }} 
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} 
                    className="mr-5 mt-[14px] w-[7vw] rounded-md h-[9vw] bg-cover object-fit" 
                    style={{ backgroundImage: `url(${eyeImage})` }} 
                    relative="-top-[0.5vw]"
                  ></motion.div>
                )}
                
                <h1 className='flex h-full items-center uppercase leading-[6vw] tracking-tighter text-[#94928D] text-[7vw] font-["gilroy"] font-medium'>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[2px] border-zinc-600 mt-20 flex justify-between items-center py-5 px-20">
        {/* Other content */}
      </div>
    </div>
  );
}

export default LandingPage;