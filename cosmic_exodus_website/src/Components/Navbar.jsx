import { useState } from 'react';

import logo from '../assets/logo.png';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';
import { navLinks } from "../Constants/constants";
import DiscordButton from './Join Discord';

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="cosmic_exodus" className="mr-2" />
      <ul className="list-none sm:flex hidden justify-center items-center flex-1 mr-4">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => {
              if (index >= navLinks.length - 2) {
                window.open(nav.href);
              } else {
                setActive(nav.title);
              }
            }
            }
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className='justify-end'>
        <div className="sm:hidden flex flex-1 items-center mb-2">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain ml-auto"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? "hidden" : "flex"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => {
                    if (index >= navLinks.length - 2) {
                      window.open(nav.href);
                    } else {
                      setActive(nav.title);
                    }
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <DiscordButton text="Join us on Discord!" onClick={() => console.log("Text button clicked")} />
      </div>
    </nav>
  );
};


export default Navbar;
