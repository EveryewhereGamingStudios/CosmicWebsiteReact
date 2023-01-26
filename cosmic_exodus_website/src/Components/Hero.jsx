import styles from "../style";
import portal from '../assets/portal.png';
import bgImage from '../assets/LandingSection.png';
import {CosmicDeckButton} from'../Components';



const Hero = () => {
  return (
    <section id="home" className={`w-full bg-cover bg-top bg-bottom flex md:flex-row flex-col ${styles.paddingY}`} style={{ backgroundImage: `url(${bgImage})` }}>      
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-16 sm:px-16 px-16`}>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          An Immersive <br className="sm:block hidden" />{" "}
          Strategy<span className="text-gradient"> Gamefy</span>{" "}
        </h1>
      </div>

      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
        Experience
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] text-justify mt-5 text-yellow-500`}>
        COMING SOON
      </p>
      <p className={`${styles.paragraph} max-w-[470px] text-justify mt-5`}>
        Enter the metaverse of web3 gaming, where your sole focus is on having
        fun. Our free-to-play, non pay-to-win games offer endless entertainment
        and opportunities to earn digital assets.
      </p>
      <br></br>
      <CosmicDeckButton/> 
    </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={portal} alt="portal" className="w-[80%] relative z-[5]" />

       
      </div>
    </section>
  );
};

export default Hero;