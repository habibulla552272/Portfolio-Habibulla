import React from 'react'
import Contact1 from './Contact1'
import Contact2 from './Contact2'

const Contact = () => {
    return (
        <section id='contact'>
            <div className='flex flex-col gap-5 md:flex-row md:justify-between py-12  md:gap-8 w-[80%] md:w-[95%] mx-auto'>

           <Contact1 />
           <Contact2 />
            </div>
        </section>
    )
}

export default Contact
