import React from 'react'
import Navebar1 from './Navebar1'
import Navebar2 from './Navebar2'
import Link from 'next/link'
import { IoIosArrowUp } from "react-icons/io";
import { BottomtoTop } from './NaveLink';

const Navebar = () => {

    
  return (
    <>
      <section className='bg-black text-white z-[50]'>
        <div className=''>
          <div className=' md:hidden '>
            <Navebar1 />

          </div>
          <div className=' hidden md:block'>
            <Navebar2 />
          </div>
        
          <div >
            <Link className={` bg-cyan-400 px-2 py-2 rounded-[30%] w-12 h-12 flex  justify-center items-center fixed bottom-10 right-4 z-50 ease-in-out text-white duration-700`} href="#">
              <IoIosArrowUp />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Navebar
