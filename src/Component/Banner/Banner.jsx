'use client'

import React from 'react'
import Typewriter from '@/Component/Banner/Typewriter';
import Image from 'next/image';

const Banner = () => {
    return (
        <section>
            {/* <div className="bg-[url('/banner.jpeg')] bg-blend-darken h-[500px] md:h-[600px] bg-cover  bg-center flex flex-col items-start justify-center relative after:absolute after:top-0 after:bottom-0 after:w-full after:h-full ">

                <h1 className="text-orange-400 font-sans text-4xl font-bold px-5">I'M HABIBULLA</h1>

                <div className="text-orange-400 font-sans text-4xl font-bold py-3 px-5">
                    <Typewriter />
                </div>

                <p className="text-[#031720 text-sm w-10/12 md:w-1/3 px-5">
                    I'm a professional Front-End Developer and focused on crafting clean
                    & user-friendly experiences. With expertise in Bootstrap, Tailwind CSS,
                    React JS and Next JS. I bring innovative web solutions to life. Let's
                    build something great together!
                </p>
                
            </div>\ */}
            <div className='relative'>


                <Image className=' object-cover w-full h-[600px] aspect-auto' objectFit='cover' src={'/banner.jpeg'} alt='banner' width={1920} height={500} />

                <div className=' absolute flex flex-col items-start justify-center opacity-50 bg-gradient-to-r from-[#031720] to-[#031720]  inset-0'>

                    <h2 className="text-orange-400 font-sans text-4xl font-bold px-5">I'M HABIBULLA</h2>

                    <div className="text-orange-400 font-sans text-4xl font-bold py-3 px-5">
                        <Typewriter />
                    </div>

                    <p className="text-[#dee2e4] text-sm md:text-[15px] w-10/12 md:w-1/2 px-5">
                        I'm a professional Front-End Developer and focused on crafting clean
                        & user-friendly experiences. With expertise in Bootstrap, Tailwind CSS,
                        React JS and Next JS. I bring innovative web solutions to life. Let's
                        build something great together!
                    </p>
                </div>

            </div>
        </section>

    )
}

export default Banner
