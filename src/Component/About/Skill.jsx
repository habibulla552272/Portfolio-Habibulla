import Image from 'next/image'
import React from 'react'

const Skill = () => {
  const skilldata = [
    {
      id: 1,
      name:'Html',
      text: `Skilled in writing clean, semantic HTML5 to create accessible and responsive web page structures.`,
      img: '/html.png',
      
    },
    {
      id: 2,
      name:'Css',
      text: `Designing elegant, responsive interfaces with modern CSS3 techniques — from Flexbox to fluid animations.`,
      img: '/css.png'
    },
    {
      id: 3,
      name:'Tailwind Css',
      text: `Crafting beautiful, responsive UIs with Tailwind CSS — utility-first styling for speed and consistency.`,
      img: '/tailwind.png'
    },
    {
      id: 4,
      name:'Js',
      text: `Writing powerful, modern JavaScript with ES6+ features to build fast, interactive user experiences.`,
      img: '/js.png'
    },
    {
      id: 5,
      name:'React Js',
      text: `Developing sleek, dynamic web apps using React.js — with reusable components and smooth state handling.`,
      img: '/react.png'
    },
    {
      id: 6,
      name:'Next Js',
      text: `Building high-performance, production-ready apps with Next.js — SSR, API routes, and lightning-fast routing.`,
      img: '/nextjs.png'
    },
    {
      id: 7,
      name:'Github',
      text: `Collaborating on real-world projects using GitHub — version control, branching, and team workflow mastery.`,
      img: '/github.png'
    }
  ]

  return (
    <section>

      <div className='py-8 bg-[#e4f0f7] text-black'>
        <h2 className='text-2xl font-extrabold font-serif border-b-1 pb-1 px-2 inline uppercase'>My Skills</h2>
        <div className='flex flex-wrap w-[90%] mx-auto md:w-[90%] gap-10 mt-5'>

          {skilldata.map(item => {
            return(
            <div key={item.id} className=' md:w-[45%] mx-auto shadow-2xl bg-white rounded-2xl px-5 py-3 text-center'>
              <div className='flex gap-3 items-center justify-center'>
                <Image className=' ' src={item.img} alt='html' width={80} height={80} />
                <p className='text-3xl font-bold font-sans leading-[150%] cinzel '>{item.name}</p>
              </div>
              <p className='text-xs md:text-[1rem] font-normal font-serif opacity-80'>{item.text}</p>
            </div>

            )


          })

          }

        </div>
      </div>

    </section>
  )
}

export default Skill
