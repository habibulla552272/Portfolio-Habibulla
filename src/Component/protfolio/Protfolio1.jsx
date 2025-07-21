import React from 'react'
import hekto from '@/assets/hekto.png'
import digBank from '@/assets/DigBank.jpeg'
import agency from '@/assets/agency.jpeg'
import agency1 from '@/assets/agency1.jpeg'
import services from '@/assets/services.jpeg'
import exclusive from '@/assets/Exclusive.jpeg'
import learning from '@/assets/learning.jpeg'
import { FaCartFlatbed } from "react-icons/fa6";

import Image from 'next/image'

const Protfolio1 = () => {
    const prot = [
        {
            name: 'Ecommerce project',
            link: 'https://hekto-one.vercel.app/',
            img: hekto
        },
        {
            name: 'Digital Banking',
            link: 'https://class-task-07.netlify.app/',
            img: digBank
        },
        {
            name: 'Learning website',
            link: 'https://class-task-06.netlify.app/',
            img: learning

        },
        {
            name: 'Agency Company',
            link: 'https://questforweb-publishers.vercel.app/',
            img: agency

        },
        {
            name: 'Digital agency',
            link: 'https://slothui-landing-page.netlify.app/',
            img: agency1
        },
        {
            name: 'services agency',
            link: 'https://frabjous-marzipan-2ac8d2.netlify.app/',
            img: services
        },
        {
            name: 'Ecommerce project',
            link: 'https://exclusive-e-commerce-lsil.vercel.app/',
            img: exclusive
        }
    ]


    return (
        <div className='flex flex-wrap gap-8 my-8'>
            {
                prot.map((item,id) => {
                    return (
                        <div key={id} className='w-10/12 md:w-[31%] mx-auto overflow-hidden relative group shadow-2xl'>
                            <Image className=' h-[200px] rounded-xl object-cover'  src={item.img} alt={item.name} />
                            <a className=' absolute bg-amber-500 -top-96 flex justify-center items-center w-full h-full text-white group-hover:top-0 rounded-xl duration-700 ease-in-out' href={item.link} target='_blank' rel='nooperner noreferrer'>
                                <span className='text-xl font-bold font-serif'>{item.name}</span>
                            </a>

                        </div>
                    )
                })
            }
         
        </div>
        
    )
}

export default Protfolio1
