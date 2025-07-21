import React from 'react'

const Contact2 = () => {
    return (
        <div>
            <form action="">
                <div className='flex flex-wrap gap-4'>

                    <div className='flex flex-col gap-2 w-full md:w-[48%]'>
                        <label htmlFor="name">Your Name</label>
                        <input className='text-sm outline-none border-1 px-5 py-2' type="text" />
                    </div>

                    <div className='flex flex-col gap-2 w-full md:w-[48%]'>
                        <label htmlFor="name">Your Email</label>
                        <input className='text-sm outline-none border-1 px-5 py-2' type="text" />
                    </div>
                </div>
                <div className='flex flex-col gap-2 pt-5'>
                    <label htmlFor="name">Subject</label>
                    <input className='text-sm outline-none border-1 px-5 py-2' type="text" />
                </div>
                <div className='mt-5 border-1'>
                    <textarea name="" id="" placeholder='Write your Message' className='w-full opacity-70'>
                       
                    </textarea>
                </div>
                <div className='flex justify-center'>

                <button className='bg-sky-500 text-white rounded-3xl px-6 py-2 mt-8' type='submit'>Send Message</button>
                </div>
            </form>
        </div>
    )
}

export default Contact2
