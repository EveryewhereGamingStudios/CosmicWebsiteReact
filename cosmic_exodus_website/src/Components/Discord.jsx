import React from 'react';
import portal2 from '../assets/portal2.png';
import Jdiscord from '../assets/Jdiscord.png';
import DiscordButton from './Join Discord';
import { FaDiscord } from 'react-icons/fa';


const Discord = () => {
  return (
    <div className="grid grid-cols-2">
      <img src={portal2} alt="portal2" className="w-full h-full" />
      <div className="relative h-full">
        <div className="bg-indigo-500 flex flex-col items-start h-full">
          <FaDiscord className="text-white w-16 h-16 mx-5 my-5" />
          <p className="text-white mx-5 justify-center" >
            Join our Discord, and be part of a vibrant community!<br></br> Connect with others, share ideas and get the latest updates on all things related to our ecosystem.<br></br>
            We look forward to seeing you there !
          </p>
          <button className="text-white bg-yellow-400 hover:bg-yellow-500 rounded-md p-2 mx-5 my-10">Join our Discord</button>
        </div>
      </div>
    </div>
  );
};

export default Discord;