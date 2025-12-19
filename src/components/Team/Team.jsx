'use client'

import { React, useEffect } from 'react'
import Teamcard from '../Teamcard/Teamcard'
import member from './MemberDetails.js'
import { motion } from 'framer-motion'
import eventsBg from '../../assets/events-bg.jpg'



const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ backgroundImage: `url(${eventsBg})` }}
        className="bg-cover bg-no-repeat">
        <h1 className="text-white text-center text-[40px]">Our Team</h1>
        <div className="min-h-screen max-h-fit w-screen flex items-center justify-center flex-wrap gap-36">
          {member.map((members, index) => (
            <Teamcard key={index} members={members} />
          ))}
          {/* <Teamcard /> */}

        </div>
      </motion.div>
    </>
  )
}

export default Team