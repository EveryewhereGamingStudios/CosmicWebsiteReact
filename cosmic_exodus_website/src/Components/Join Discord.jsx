import React from 'react';
import discordIcon from '../assets/discord_small_icon.svg';
import { useState, useEffect } from 'react';

const DiscordButton = ({ text }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowText(true);
      } else {
        setShowText(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <a href="https://discord.com" target="_blank" rel="noreferrer noopener" className="text-white font-medium rounded-md">
      <button className="discord-button flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-800">
        <img src={discordIcon} alt="Discord icon" className="w-6 h-6 mr-4" />
        {showText && <span className="discord-button-text">{text}</span>}
      </button>
    </a>
  )
}

export default DiscordButton