import React from 'react'
import Skill from './Skill'
import EducationAndExp from './EducationAndExp'

const About = () => {
  const pInfo = [
    {
      num: 6,
      name: 'MONTH OF EXPERIENCE'
    },
    {
      num: 20,
      name: 'Project Done'
    },
    {
      num: 2,
      name: 'Happy customer'
    },
    {
      num: 1,
      name: 'Awards Won'
    }
  ]
  return (
    <section id='about' className='z-[10]'>
      <div>
        <div className='my-10 py-10'>
          <h2 className='text-4xl font-extrabold font-serif border-b-2 pb-3 pl-2 w-fit'>About Me</h2>
          <div className='lg:flex gap-5'>
            <div className='pt-8 lg:w-[55%]'>
              <h2 className='w-10/12 mx-auto font-extrabold text-2xl'>PERSONAL INFORMATION</h2>
              <div className='flex gap-5 justify-between w-10/12 mx-auto font-sans pt-5'>
                <div>
                  <ul className='flex flex-col gap-5'>
                    <li className='text-[15px] md:text-[18px] flex gap-2'>
                      <p className=' opacity-100 font-extrabold '>Name:</p>
                      <span className='opacity-80 font-semibold'>Md.Habibulla</span>
                    </li>
                    <li className='text-[15px] md:text-[18px] flex gap-2'>
                      <p className='opacity-100 font-extrabold ' >Age:</p>
                      <span className='opacity-80 font-semibold'>21 Years</span>
                    </li>
                    <li className='text-[15px] md:text-[18px] flex flex-wrap gap-2'>
                      <p className='opacity-100 font-extrabold ' > Nationallity:</p>
                      <span className='opacity-80 font-semibold'>Bangladeshi</span>
                    </li>

                  </ul>
                </div>
                <div>

                  <ul className='flex flex-col gap-5'>
                    <li className='text-[15px] md:text-[18px] flex gap-2'>
                      <p className='opacity-100 font-extrabold' >Address:</p>
                      <span className='opacity-80 font-semibold'>Dhaka</span>
                    </li>
                    <li className='text-[15px] md:text-[18px] flex gap-2'>
                      <p className='opacity-100 font-extrabold '>Phone:</p>
                      <span className='opacity-80 font-semibold'>01330961124</span>
                    </li>
                    <li className='text-[15px] md:text-[18px] flex flex-wrap gap-2'>
                      <p className='opacity-100 font-extrabold '>Email:</p>
                      <span className='opacity-80 font-semibold'>mdhabibulla146425@gmail.com</span>
                    </li>
                    <li className='text-[15px] md:text-[18px] flex gap-2'>
                      <p className='opacity-100 font-extrabold ' >Linkedin:</p>
                      <span className='opacity-80 font-semibold'>www.linkedin.com/in/md-habibulla55/</span>
                    </li>

                  </ul>

                </div>
              </div>
            </div>
            <div className='flex flex-wrap justify-between w-[90%] lg:w-[45%] mx-auto gap-2 px-5 mt-5'>
              {pInfo.map((item, id) => {
                return (
                  <div key={id} className='px-5 py-3 border-2 border-orange-400 rounded-xl w-[45%] hover:scale-[103%] duration-500'>
                    <h2 className='font-bold lg:text-[50px] text-[40px] md:pb-6 text-[#ffb400] '>{item.num}</h2>
                    <h2 className='font-normal text-[16px] md:pl-9  uppercase relative after:absolute after:top-1/2  after:translate-y-1/2 after:left-0 after:content-[""] after:h-0.5 after:w-8 after:hidden after:lg:block after:bg-orange-400 after:opacity-65'>{item.name}</h2>
                  </div>
                )
              })

              }



            </div>

          </div>

        </div>
        <Skill />
       <EducationAndExp />

      </div>
    </section>
  )
}

export default About
