import React from 'react'
import styles from "../style";
import bgImage from '../assets/Partnersbg.png';
import { SubNewsletter} from '../Components';


const Gameplay = () => {
  return (
    <section id="gameplay" className={`w-full bg-cover bg-top bg-bottom flex md:flex-row flex-col ${styles.paddingY}`} style={{ backgroundImage: `url(${bgImage})` }}>


      <div className={`flex-1 flex ${styles.flexCenter} xl:px-6 md:px-6 my-10 sm:px-2 relative`}>
        <video className="w-[100%] relative z-[5]" controls>
          {/* <source src={videoUrl} type="video/mp4" /> */}
          Video Here
        </video>
      </div>


      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-6 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            <span className="text-gradient"> WITHSTAND KAIROS</span>{" "}
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] text-justify mt-5 text-yellow-500`}>
          OUR FIRST RELEASE
        </p>
        <p className={`${styles.paragraph} max-w-[470px] text-justify mt-5`}>
          Join the<span className="text-gradient"> Solo Campaign (PVE mode)</span>, and assemble your favourite troops and towers to fight the forces of Kairos, the God of time and space.
        </p><p className={`${styles.paragraph} max-w-[470px] text-justify mt-5`}>
          Become a creator and design your dungeons! Join the arena (PVP mode) to test your skills and become victorious.
        </p><p className={`${styles.paragraph} max-w-[470px] text-justify mt-5`}>
          The Cosmic Exodus is full of surprises and a unique 3D gaming experience.
          If you're into Tower Defense games, we invite you to feel the Cosmic energy for yourself!
        </p>
        <br></br>
        <SubNewsletter />
      </div>
    </section>
  );
};

export default Gameplay