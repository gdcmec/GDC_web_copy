'use client'

import React from 'react'
import Navbar from '../Navbar/Navbar'
import logo from '@/assets/newlogo.png'
// import Omodel from '../model/model'
import { motion } from 'framer-motion'
import explore from '@/assets/Group.png'
import controller from '@/assets/controller.png'
import unionBg from '@/assets/Union.svg'

const landing = () => {

  // const logomodel =  useGLTF('./GDC_logo_glb.glb');


  return (
    <>

      <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-black">
        <svg className='absolute top-8 bottom-8 left-4 right-8 w-[calc(100%-3rem)] h-[calc(100%-4rem)]' viewBox="0 0 1887 1018" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M1341.48 69.3856H536.642C518.971 69.3856 502.122 61.9232 490.246 48.8375C488.355 46.7538 486.436 44.6005 484.487 42.4122C466.867 22.637 446.697 0 421.27 0H65C29.1015 0 0 29.1015 0 65V891.899C0 927.798 29.1015 956.899 65.0001 956.899H559.666L611.275 1007.9C617.826 1014.37 626.665 1018 635.875 1018H1249.36C1258.43 1018 1267.15 1014.48 1273.67 1008.18L1326.8 956.899H1822C1857.9 956.899 1887 927.798 1887 891.899V65C1887 29.1015 1857.9 0 1822 0H1459.94C1434.65 0 1414.18 21.4471 1395.66 40.8402C1392.3 44.3623 1389 47.8167 1385.75 51.0626C1374.01 62.7954 1358.08 69.3856 1341.48 69.3856Z" fill="url(#paint0_linear_252_21)" />
          <defs>
            <linearGradient id="paint0_linear_252_21" x1="943.5" y1="0" x2="943.5" y2="1018" gradientUnits="userSpaceOnUse">
              <stop offset="0.315674" stopColor="#3D3D3D" />
              <stop offset="1" stopColor="#1F1F1F" />
            </linearGradient>
          </defs>
        </svg>


        <img className="hidden z-10" src={logo} alt="" />
        <motion.img
          initial={{ y: -70, rotate: 45, opacity: 0 }}
          whileInView={{ y: 0, opacity: 0.5 }}
          transition={{ duration: 1 }}
          className='absolute scale-50 opacity-50 -left-[850px] -top-[250px] rotate-[40deg] z-0 grayscale-[0.5] max-md:scale-100 max-md:-left-[270px] max-md:top-[90px] max-lg:max-md:-left-[570px] max-lg:max-md:top-[70px]'
          src={controller} alt="" />
        <motion.img
          initial={{ y: 80, rotate: 45, opacity: 0 }}
          whileInView={{ y: 0, opacity: 0.5 }}
          transition={{ duration: 1 }}
          className='absolute scale-[0.4] opacity-50 -right-[750px] top-[100px] rotate-[20deg] z-0 grayscale-[0.5] max-md:scale-100 max-md:-right-[250px] max-md:top-[600px] max-md:rotate-[4deg] max-lg:max-md:-right-[550px] max-lg:max-md:top-[800px]'
          src={controller} alt="" />
        <a href='https://www.zetrel.in' target='_blank' rel="noopener noreferrer" className='absolute h-[45px] w-40 top-[30px] right-[5vw] flex justify-center items-center no-underline border-none rounded-[30px] bg-black text-gdc-yellow font-sans cursor-pointer text-base hover:animate-btnhover active:shadow-[inset_3px_3px_4px_#181717,inset_-3px_-3px_4px_#302d2d] active:bg-[#242222] max-md:h-[35px] max-md:w-[120px] max-md:text-sm max-md:right-[10px] max-md:top-5 max-md:scale-90'>Zetrel</a>
        {/* <Navbar /> */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='relative z-[1] cursor-default text-center'>
          <h1 className='text-[6rem] font-drover font-light z-[1] bg-gradient-to-b from-gdc-orange to-gdc-yellow bg-clip-text text-transparent max-md:text-[2rem] max-lg:max-md:text-[4rem] max-[1450px]:max-h-[750px]:text-[4.5rem] max-[1300px]:max-h-[780px]:text-[4rem] max-[1200px]:max-h-[680px]:text-[4rem] max-[450px]:max-h-[700px]:scale-90 max-[380px]:min-h-[720px]:text-[2rem] max-[550px]:min-h-[700px]:text-[2rem] max-[200px]:scale-50 max-[300px]:scale-[0.7]'>Game Development<br />Club<br /></h1>
        </motion.div>
        <motion.span
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='font-space text-[30px] text-white bg-white bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] max-md:text-base max-lg:max-md:text-[30px] max-[1450px]:max-h-[750px]:text-[1.7rem] max-[1300px]:max-h-[780px]:text-[1.3rem] max-[1200px]:max-h-[680px]:text-[1.3rem] max-[450px]:max-h-[700px]:text-base max-[380px]:min-h-[720px]:text-[0.9rem] max-[550px]:min-h-[700px]:text-[0.9rem] max-[300px]:text-[0.6rem] max-[200px]:text-[0.5rem]'>Think It • Build It • Play It</motion.span>
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ backgroundImage: `url(${explore})` }}
          className='absolute bottom-5 scale-[0.6] h-48 w-48 border-none bg-transparent text-[50px] grid place-content-center text-white cursor-pointer transition-all duration-500 hover:text-[60px] hover:animate-rotation max-md:scale-[0.7] max-md:bottom-[90px] max-lg:max-md:scale-100 max-lg:max-md:bottom-[120px] max-[1450px]:max-h-[750px]:bottom-0 max-[1450px]:max-h-[600px]:scale-50 max-[1450px]:max-h-[600px]:-bottom-5 max-[1300px]:max-h-[780px]:scale-50 max-[1300px]:max-h-[780px]:-bottom-[19px] max-[1200px]:max-h-[680px]:scale-50 max-[1200px]:max-h-[680px]:-bottom-[19px] max-[450px]:max-h-[700px]:bottom-[50px] max-[550px]:min-h-[700px]:bottom-[50px] max-[200px]:scale-[0.3] max-[200px]:bottom-5 max-[300px]:scale-[0.4] max-[300px]:bottom-5'
          href='#about'>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4.646 9.646a.5.5 0 01.708 0L8 12.293l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z" clipRule="evenodd"></path>
            <path fillRule="evenodd" d="M8 2.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V3a.5.5 0 01.5-.5z" clipRule="evenodd"></path>
          </svg>
        </motion.a>
      </div>
      {/* <div className="modeldiv">
            <Omodel />
          </div> */}
    </>
  )
}

export default landing

