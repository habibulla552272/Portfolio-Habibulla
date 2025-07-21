import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePhone } from "react-icons/md";
import { IoMailUnreadSharp } from "react-icons/io5";

const Contact1 = () => {
    return (
        <div>
            <div>



            <div className='flex items-center gap-5'>
                <p className='text-cyan-400 w-10 h-10 flex justify-center items-center rounded-4xl bg-cyan-100 hover:bg-cyan-300 hover:text-white'>
                    <FaLocationDot />
                </p>
                <div>

                <h2 className='text-2xl font-semibold font-mono'>Addrees</h2>
                <p className='text-sm opacity-80'>Mohammadpur,Dhaka</p>
                </div>
            </div>
             <div className='flex items-center gap-5 py-5'>
                <p className='text-cyan-400 w-10 h-10 flex justify-center items-center rounded-4xl bg-cyan-100 hover:bg-cyan-300 hover:text-white'>
                    <MdOutlinePhone />
                </p>
                <div>

                <h2 className='text-2xl font-semibold font-mono'>Phone</h2>
                <p className='text-sm opacity-80'>01330961124</p>
                </div>
            </div>
             <div className='flex items-center gap-5'>
                <p className='text-cyan-400 w-10 h-10 flex justify-center items-center rounded-4xl bg-cyan-100 hover:bg-cyan-300 hover:text-white'>
                    <IoMailUnreadSharp />
                </p>
                <div>

                <h2 className='text-2xl font-semibold font-mono'>Email</h2>
                <p className='text-sm opacity-80'>mdhabibulla146425@gmail.com</p>
                </div>
            </div>

            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Contact1
