'use client'

import React from 'react'
import Typewriter from '@/Component/Banner/Typewriter';

const Banner = () => {
    return (
        <section>
            <div className="bg-[url('/banner.jpeg')] h-[500px] md:h-[600px] bg-cover bg-center flex flex-col items-start justify-center relative after:absolute after:top-0 after:bottom-0 after:w-full after:h-full ">

                <h1 className="text-orange-400 font-sans text-4xl font-bold px-5">I'M HABIBULLA</h1>

                <div className="text-orange-400 font-sans text-4xl font-bold py-3 px-5">
                    <Typewriter />
                </div>

                <p className="text-orange-400 text-sm w-10/12 md:w-1/3 px-5">
                    I'm a professional Front-End Developer and focused on crafting clean
                    & user-friendly experiences. With expertise in Bootstrap, Tailwind CSS,
                    React JS and Next JS. I bring innovative web solutions to life. Let's
                    build something great together!
                </p>
            </div>
        </section>

    )
}

export default Banner
