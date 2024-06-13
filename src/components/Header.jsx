import React from "react";
import Logo from "./Logo";
import { NAV_LINKS } from "../../data";
import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
import { Link } from 'react-router-dom';
import Container from "./Container";

const Header = () => {

  const [isNavClosed, setisNavClosed] = useState(true);

  return (
    <header className="absolute top-0 left-0 w-full h-24 z-10">
      <nav className="max-w-screen-xl mx-auto h-full px-10 flex justify-between items-center">
        <Link to='/'>
          <Logo />
        </Link>
        <ul className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link, index) => (
            <li
              key={index}
              className="capitalize hover:text-accent-500 
              text-primary-500">
              {/* <a href={link.link} onClick={ ()=>{
                const element = document.getElementById('about');
                console.log(`element, ${element}`)
                element?.scrollIntoView({
                  behavior: 'smooth'
                })
              } }> */}
                <a href={link.link}> {link.name} </a>
            </li>
          ))}
          {/* <Button>Get In Touch</Button> */}
        </ul>
        <button
          className="md:hidden text-4xl text-primary-500 z-20"
          onClick={() => setisNavClosed(!isNavClosed)}
        >
          {isNavClosed ? (
            <GiHamburgerMenu />
          ) : (<CgClose className="text-secondary-500" />)}
        </button>
      </nav>
      <ul className={`flex md:hidden bg-primary-500 text absolute top-0 right-0 z-10
      flex-col pt-32 text-2xl pl-10 gap-10 w-80 h-screen transition-all duration-300
      ${isNavClosed ? "translate-x-full" : "translate-x-0"}`}>
        {NAV_LINKS.map((link, index) => (
          <li
            key={index}
            className="capitalize hover:text-accent-500 
              text-secondary-500">
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header;