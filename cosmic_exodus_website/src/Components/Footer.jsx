import React from "react";
import logo from '../assets/4.png'
import { FaYoutube, FaTwitter, FaInstagram, FaTelegram } from "react-icons/fa";
import styles from "../style";
import logo1 from '../assets/partners.png'



const Footer = () => {
  return (
    <div className="flex bg-zinc-900 grid grid-cols-3 gap-4">

      <div className="my-10 mx-5 col-span-2 ...">
        <div>
          <img src={logo} alt="logo" className="w-[20%]" />
        </div>
      </div>
      <div className={`flex mx-10 my-10 justify-end ... `} >
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
          <FaTwitter className="h-8 w-8 mx-4 cursor-pointer" />
        </a>
        <a href="https://www.telegram.com" target="_blank" rel="noopener noreferrer" className="text-white">
          <FaTelegram className="h-8 w-8 mx-4 cursor-pointer" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
          <FaInstagram className="h-8 w-8 mx-4 cursor-pointer" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-white">
          <FaYoutube className="h-8 w-8 mx-4 cursor-pointer" />
        </a>
      </div>
      <div className="flex flex-row space-x-20 mx-5  ">
        <div >
          <h1 className="font-bold text-white">Help</h1>
          <ul>
            <li className="text-white">FAQs</li>
            <li className="text-white">Contact Us</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-white">Company</h1>
          <ul>
            <li className="text-white">About Us</li>
            <li className="text-white">Careers (We're Hiring)🎉</li>
            <li className="text-white">Blog</li>
          </ul>
        </div>
        <div>
          <h1 className="flex font-bold text-white">Check this Out</h1>
          <ul>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <li className="text-white">Whitepaper</li>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <li className="text-white">Cosmic Deck</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="col-span-2 ...">
        <div className={`flex-1 flex justify-end items-center md:my-5 mx-10 relative`}>
          <strong className="text-white">Powered by:</strong>
          <img src={logo1} alt="logo1" className="w-[60%] relative z-[5]" />
        </div>
      </div>


      <div className=" col-span-3 my-10 ...">
      <ul className="flex items-end text-white">
            <li className="mx-4">©2023. Cosmic Ecodus, All rights reserved.</li>
            <li className="mx-4">• Terms and Conditions</li>
            <li className="mx-4">• Privacy Policy</li>
            <li className="mx-4">• Privacy Settings</li>
          </ul>
      </div>
    </div>
  );
};

export default Footer;