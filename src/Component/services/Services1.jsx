import React from 'react'
import { MdOutlineLoop } from "react-icons/md";
import { IoQrCode } from "react-icons/io5";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { BiMobileVibration } from "react-icons/bi";
import { PiSignatureFill } from "react-icons/pi";
import { GiRunningNinja } from "react-icons/gi";


const Services1 = () => {

    const service = [
        {
            do: 'Figma to HTML',
            discription: 'Figma to HTML involves converting designs created in Figma, a web design tool, into HTML code for web development. This process ensures that designs are translated accurately into functional web pages and apps.',
            link: MdOutlineLoop
        },
        {
            do: 'E-commerce Website',
            discription: 'An e-commerce website enables online buying and selling of goods or services. It typically includes features like product listings, shopping carts, secure payment gateways, and order management systems for seamless transactions.',
            link: FaCartFlatbedSuitcase
        },
        {
            do: 'Responsive Web App',
            discription: 'Responsive web apps adapt layout and functionality to fit different devices and screen sizes, ensuring optimal performance and user experience across desktops, smartphones, and tablets through fluid layouts and media.',
            link:BiMobileVibration
            
        },
        {
            do: 'Fast Landing Page',
            discription: 'A fast-loading website built with React utilizes efficient coding practices and optimization techniques to ensure quick page rendering and seamless user experiences, enhancing performance and engagement for visitors.',
            link:GiRunningNinja
            
        },
        {
            do: 'Web Customization',
            discription: 'Web customization in front-end web development involves tailoring website appearance and functionality to meet specific client needs through HTML, CSS, JavaScript, ensuring unique and personalized user experiences.',
            link: IoQrCode

        },
        {
            do: 'Email Signature',
            discription: 'A high-performing email signature built with React leverages optimized code and best practices to ensure fast rendering and smooth functionality, creating an engaging and efficient experience for all recipients.',
            link:PiSignatureFill
        }

    ]
    return (
        <div className='flex flex-wrap gap-8 my-8 w-[98%] mx-auto'>
            {
                service.map((item, id) => {
                    return (
                        <div key={id} className='w-10/12 md:w-[31%] mx-auto border-2 rounded-2xl border-amber-500 px-8 py-5 text-white hover:scale-[103%] duration-500 shadow-[0px_0px_5px_rgba(255,180,0,1)]'>
                            {item.link && <item.link className='text-amber-500 text-3xl' /> }
                            <h2 className='text-2xl font-bold font-serif text-amber-500'>{item.do}</h2>
                            <p className='text-sm font-semibold  text-gray-400 py-3'>{item.discription}</p>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Services1
