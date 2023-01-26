import React from 'react'
import styles from "../style";
import bgImage from '../assets/Community.png'
import logo1 from '../assets/partners.png'



const Partners = () => {
  return (
    <section id="partners" className={`w-full bg-cover bg-top bg-bottom flex md:flex-row flex-col ${styles.paddingY}`} style={{ backgroundImage: `url(${bgImage})` }}>

      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-6 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[40px] text-[50px] text-white ss:leading-[100.8px] leading-[75px]">
            <span className="text-gradient"> We want to expand our official partners.</span><br></br>
            <span className="text-gradient"> Help us achieve our goal !</span>
          </h1>
        </div>
      </div>

      <div className={`flex-1 flex ${styles.flexEnd} md:my-5 mx-5 relative`}>
        <img src={logo1} alt="logo1" className="w-[90%] relative z-[5]" />
      </div>





    </section>
  );
};

export default Partners

