'use client'

import React, { useState } from 'react'
import { AlignJustify } from "@deemlol/next-icons";
import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaImages } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";


import Image from 'next/image';
import profile from '@/assets/profile.jpg'
import Link from 'next/link';

const Navebar1 = () => {
    const [menuBar,setMenuBar]=useState(false)

    const showMenuBar=()=>{
    
       
       setMenuBar(!menuBar)
        
    }

     const [activeLink,setActiveLink]=useState('home')
        const handelSetActiveLink=(link)=>{
           
            setActiveLink(link)
            
        }
        
    return (
        <section className={`bg-black text-white fixed top-0 z-50 ${menuBar ? "absolute top-0 left-0 ease-in-out duration-700": " absolute top-0 -left-60 ease-in-out duration-700"}`}>
            <div className=''>
                <div className=' flex justify-between'>

                    <div className='px-5 py-10 '>
                        <div>
                            <div className='flex flex-col items-center justify-center py-5'>
                                <Image className='w-[100px] h-[100px] rounded-[100%] px-1 py-1 bg-gray-500' src={profile} alt='profile'/>
                                <h2 className='text-2xl py-2'>Habibulla</h2>
                            </div>
                            <div className='flex gap-3'>
                                <ul className='flex gap-3'>
                                    <li className='px-2 py-2 text-2xl bg-gray-700 rounded-4xl hover:bg-cyan-400'>
                                        <a href="https://www.facebook.com/mdhabibulla.habibulla.923" target='_blank'>
                                            <FaFacebook />

                                        </a>
                                    </li>
                                    <li className='px-2 py-2 text-2xl bg-gray-700 rounded-4xl hover:bg-cyan-400'>
                                        <a href="https://www.linkedin.com/in/md-habibulla55/" target='_blank'><FaLinkedin /></a>
                                    </li>
                                    <li className='px-2 py-2 text-2xl bg-gray-700 rounded-4xl hover:bg-cyan-400'>
                                        <a href="https://github.com/habibulla552272" target='_blank'>

                                        <FaGithub />
                                        </a>

                                    </li>
                                    <li></li>
                                </ul>

                            </div>

                        </div>
                        <div className='py-5'>
                            <ul className='flex flex-col gap-8'>
                                <li className='flex gap-3 items-center text-neutral-400 hover:text-white'>
                                    <IoMdHome className='text-2xl' />

                                    <a href="/">Home</a>
                                </li>
                                <li className={`flex gap-3 items-center text-neutral-400 hover:text-white ${activeLink == 'about' ? "text-white" : 'text-neutral-400'}`}>
                                   <FaUser className='text-2xl' />

                                    <a onClick={()=> handelSetActiveLink('about')} href="#about">About</a>
                                </li>
                                <li className={`flex gap-3 items-center text-neutral-400 hover:text-white ${activeLink == 'protfolio' ? "text-white" : 'text-neutral-400'}`}>
                                    <FaImages className='text-2xl' />

                                    <a onClick={()=> handelSetActiveLink('protfolio')} href="#protfolio">Protfolio</a>
                                </li>
                                <li className={`flex gap-3 items-center text-neutral-400 hover:text-white ${activeLink == 'services' ? "text-white" : 'text-neutral-400'}`}>
                                    <FaServer className='text-2xl' />

                                    <a onClick={()=> handelSetActiveLink('services')} href="#services">Services</a>
                                </li>
                                <li className={`flex gap-3 items-center text-neutral-400 hover:text-white ${activeLink== 'contact' ? "text-white" : 'text-neutral-400'}`}>
                                    <IoMdMail className='text-2xl' />

                                    <a onClick={()=> handelSetActiveLink('contact')} href='#contact'>contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>



                    <div onClick={showMenuBar} className='bg-cyan-400 px-2 py-2 rounded-[30%] w-12 h-12 flex  justify-center items-center fixed top-10 right-4 text-white'>
                        {menuBar ? <RxCross1 />: <AlignJustify /> }
                        
                    </div>
                    

                </div>

            </div>
        </section>
    )
}

export default Navebar1
