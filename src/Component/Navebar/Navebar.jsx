import React from 'react'
import Navebar1 from './Navebar1'
import Navebar2 from './Navebar2'

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
            </div>
        </section>
    </>
  )
}

export default Navebar
