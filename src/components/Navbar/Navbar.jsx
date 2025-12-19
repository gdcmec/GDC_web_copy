'use client'

import React, { useState } from 'react'
// import lottie from "lottie-web";
// import { defineElement } from "@lordicon/element";
import logo from '../../assets/GDC_Logo new.png'

// defineElement(lottie.loadAnimation);

const navbar = () => {

    const [act, setact] = useState(0);

    const handlehm = () => {
        setact(0);
    }
    const handleab = () => {
        setact(1);
    }

    // const setHome = () => setsec('home');
    // const setAbout = () => setsec('about');
    // const setContact = () => setsec('contact');

    // console.log(sec)

    // if(sec == "home") {
    //     // document.getElementById('homel').classList.add('active');
    //     // document.getElementById('aboutl').classList.remove('active');
    //     // document.getElementById('contactl').classList.remove('active');
    // }


    return (
        <>
            <div className="w-full flex items-center justify-center h-fit fixed z-10 top-[4vh] max-md:bottom-5 max-md:top-auto max-lg:max-md:bottom-5 max-lg:max-md:top-auto">

                <nav className="flex items-center justify-center h-[7vh] w-[38%] bg-black fixed z-10 rounded-[50px] opacity-70 backdrop-blur-[20px] max-md:w-[90vw] max-md:h-[7vh] max-md:left-5 max-md:m-0 max-md:bottom-[22px] max-md:bg-[#413f3f] max-md:shadow-[4px_4px_5px_#1a1919,-4px_-4px_5px_#474343] max-md:opacity-100 max-md:fixed max-md:bg-gradient-to-br max-md:from-[#222121] max-md:to-[#2C2A28] max-md:backdrop-blur-0 max-lg:max-md:bottom-[22px]">


                    <ul className="list-none h-full flex items-center justify-around flex-row m-0 p-0 w-full transition-all duration-400">
                        <li><a className='rounded-[15px] text-gdc-yellow no-underline font-sans text-[1.25vw] opacity-100 hover:text-shadow-[0px_0px_2px_#fff] max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:opacity-70 max-md:text-[15px]' id="homel" href="#home">
                            <svg className='hidden max-md:flex max-md:h-[1.2em] max-md:w-[1.2em]' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M8.003,15c0-1.103,0.897-2,2-2h4c1.103,0,2,0.897,2,2v5h3.001l-0.001-8.586l-7-7l-7,7V20h3V15z"></path><path fill="none" d="M10.003 15H14.003V20H10.003z"></path><path d="M5.003,22h4h6h4c1.103,0,2-0.897,2-2v-9c0-0.265-0.105-0.52-0.293-0.707l-8-8c-0.391-0.391-1.023-0.391-1.414,0l-8,8 C3.108,10.48,3.003,10.735,3.003,11v9C3.003,21.103,3.9,22,5.003,22z M10.003,20v-5h4v5H10.003z M5.003,11.414l7-7l7,7L19.004,20 h-3.001v-5c0-1.103-0.897-2-2-2h-4c-1.103,0-2,0.897-2,2v5h-3V11.414z"></path></svg>
                            <span className='flex transition-all duration-500 max-md:text-[10px] max-md:font-valorant max-md:text-white max-[400px]:text-[10px]'>Home</span></a></li>

                        <li><a className='rounded-[15px] text-gdc-yellow no-underline font-sans text-[1.25vw] opacity-100 hover:text-shadow-[0px_0px_2px_#fff] max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:opacity-70 max-md:text-[15px]' id="aboutl" href="#about">
                            <svg className='hidden max-md:flex max-md:h-[1.2em] max-md:w-[1.2em]' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path></svg>
                            <span className='flex transition-all duration-500 max-md:text-[10px] max-md:font-valorant max-md:text-white max-[400px]:text-[10px]'>About</span></a></li>

                        <li><a className='rounded-[15px] text-gdc-yellow no-underline font-sans text-[1.25vw] opacity-100 hover:text-shadow-[0px_0px_2px_#fff] max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:opacity-70 max-md:text-[15px]' href="#events">
                            <svg className='hidden max-md:flex max-md:h-[1.2em] max-md:w-[1.2em]' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path></svg>
                            <span className='flex transition-all duration-500 max-md:text-[10px] max-md:font-valorant max-md:text-white max-[400px]:text-[10px]'>Events</span></a></li>

                        <li><a className='rounded-[15px] text-gdc-yellow no-underline font-sans text-[1.25vw] opacity-100 hover:text-shadow-[0px_0px_2px_#fff] max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:opacity-70 max-md:text-[15px]' href="#blog">
                            <svg className='hidden max-md:flex max-md:h-[1.2em] max-md:w-[1.2em]' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M172.2 226.8c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 22 18.2 6.8 31.3 24.4 31.3 45 0 26.5-21.5 48-48 48s-48-21.5-48-48V120c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v248c0 89.5 82.1 160.2 175 140.7 54.4-11.4 98.3-55.4 109.7-109.7 17.4-82.9-37-157.2-112.5-172.2zM209 0c-9.2-.5-17 6.8-17 16v31.6c0 8.5 6.6 15.5 15 15.9 129.4 7 233.4 112 240.9 241.5.5 8.4 7.5 15 15.9 15h32.1c9.2 0 16.5-7.8 16-17C503.4 139.8 372.2 8.6 209 0zm.3 96c-9.3-.7-17.3 6.7-17.3 16.1v32.1c0 8.4 6.5 15.3 14.8 15.9 76.8 6.3 138 68.2 144.9 145.2.8 8.3 7.6 14.7 15.9 14.7h32.2c9.3 0 16.8-8 16.1-17.3-8.4-110.1-96.5-198.2-206.6-206.7z"></path></svg>
                            <span className='flex transition-all duration-500 max-md:text-[10px] max-md:font-valorant max-md:text-white max-[400px]:text-[10px]'>Blog</span></a></li>

                        {/* <li><a className='navalink' href="#team"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path fillRule="nonzero" d="M12 11a5 5 0 0 1 5 5v6h-2v-6a3 3 0 0 0-2.824-2.995L12 13a3 3 0 0 0-2.995 2.824L9 16v6H7v-6a5 5 0 0 1 5-5zm-6.5 3c.279 0 .55.033.81.094a5.947 5.947 0 0 0-.301 1.575L6 16v.086a1.492 1.492 0 0 0-.356-.08L5.5 16a1.5 1.5 0 0 0-1.493 1.356L4 17.5V22H2v-4.5A3.5 3.5 0 0 1 5.5 14zm13 0a3.5 3.5 0 0 1 3.5 3.5V22h-2v-4.5a1.5 1.5 0 0 0-1.356-1.493L18.5 16c-.175 0-.343.03-.5.085V16c0-.666-.108-1.306-.309-1.904.259-.063.53-.096.809-.096zm-13-6a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm13 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm-13 2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zm13 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zM12 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path></g></svg><span className='navname'>Team</span></a></li> */}

                        <li><a className='rounded-[15px] text-gdc-yellow no-underline font-sans text-[1.25vw] opacity-100 hover:text-shadow-[0px_0px_2px_#fff] max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:opacity-70 max-md:text-[15px]' id="contactl" href="#contact">
                            <svg className='hidden max-md:flex max-md:h-[1.2em] max-md:w-[1.2em]' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 7h5v2h-5V7zm-2 5h7v2h-7v-2zm3 5h4v2h-4v-2zM2 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"></path></g></svg>
                            <span className='flex transition-all duration-500 max-md:text-[10px] max-md:font-valorant max-md:text-white max-[400px]:text-[10px]'>Contact</span></a></li>
                    </ul>
                </nav>
            </div>
        </>
    )

}


export default navbar