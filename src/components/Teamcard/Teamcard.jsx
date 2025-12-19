import React from 'react'
import image from '../../assets/newlogo_crop.png'
import { motion } from 'framer-motion'

const Teamcard = ({ members }) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="h-[350px] w-[270px] bg-[#1c1616] flex flex-col items-center justify-center p-5 rounded-[20px] shadow-[5px_5px_5px_#161111,-5px_-5px_5px_#221b1b]">
                <div className="h-4/5 w-4/5 grid scale-[0.7] place-content-center">
                    <img src={image} alt="" />
                </div>

                <div className="flex flex-col items-center justify-center text-[#0FD42F] h-full">
                    <h2 className="text-[1.2rem] text-center"><b>{members?.name}</b></h2>
                    <h3 className="text-base text-center pb-5">{members?.position}</h3>
                    <div className="flex items-center justify-around flex-row gap-[1.3rem] p-2.5 pb-[50px]">
                        <button className="border-2 border-[#0FD42F] w-[100px] h-10 rounded-[10px]">Message</button>
                        <button className="w-[100px] h-10 rounded-[10px] bg-[#0FD42F] m-0 text-[#1c1616]">Connect</button>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Teamcard