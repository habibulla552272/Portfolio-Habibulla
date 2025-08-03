import React from 'react'

const EducationAndExp = () => {
    return (
        <div className='mt-10 py-8'>
            <h2 className='text-xl pl-1 md:text-2xl font-extrabold font-serif border-b-2 pb-3 w-fit uppercase cinzel '>Education & Experience</h2>
            <div className='lg:flex lg:justify-between lg:flex-wrap w-[90%] lg:w-[95%] mx-auto'>
                <div className='lg:w-[48%] '>
                    <h3 className='text-xl font-bold font-sans border-b-2 pb-1 w-fit my-10 md:my-8'>Education</h3>
                    <div className='pl-8 relative after:absolute after:content-[""] after:w-0.5 after:h-full after:bg-cyan-400 after:left-2 after:top-0'>
                        <div >
                            <h2 className='text-xl font-bold flex gap-2 items-center relative after:absolute after:content-[""] after:w-[16px] after:h-[16px] after:rounded-4xl after:text-cyan-400 after:bg-white after:z-40 after:border-[2px] after:-left-[31px]'>Diploma <span className='text-xs font-normal'>(Computer Science & Technology)</span></h2>
                            <p className='font-bold  pt-1 text-sm'>2020-2025</p>
                            <p className='text-sm  '>Boalmari Institute of Engineering and Technology</p>
                            <p className='pt-4 text-sm font-medium opacity-90 font-serif '>
                                I completed my Diploma in Computer Science & Technology with a CGPA of 3.69.
                                During my diploma, I developed strong skills in programming, web development, database management, and software engineering fundamentals.
                                I also completed several projects using React js and Next js stack and focused on building efficient, scalable web applications
                            </p>
                        </div>
                        <div className='pt-10'>
                            <h2 className='text-xl font-bold flex gap-2 items-center relative after:absolute after:content-[""] after:w-[16px] after:h-[16px] after:rounded-4xl after:text-cyan-400 after:bg-white after:z-40 after:border-[2px] after:-left-[31px]'>SSC <span className='text-xs font-normal'>(Computer Science & Technology)</span></h2>
                            <p className='font-bold  pt-1 text-sm uppercase'>jan,20-mar,2020 </p>
                            <p className='text-sm '>Kharsuti C.K. High</p>
                            <p className='pt-4 text-sm font-medium opacity-90 font-serif '>
                                I completed my Secondary School Certificate (SSC) in the Science group, achieving excellent results.
                                This period helped me develop a strong foundation in mathematics, physics, and logical problem-solving, which later inspired me to pursue a career in technology.
                            </p>
                        </div>
                    </div>


                </div>
                <div className='lg:w-[48%] mt-10 md:mt-8'>
                    <h3 className='text-xl font-bold font-sans border-b-2 pb-1 w-fit mb-8'>Professional Experience</h3>
                    <div className='pl-8 relative after:absolute after:content-[""] after:w-0.5 after:h-full after:bg-cyan-400 after:left-2 after:top-0'>
                        <div >
                            <h2 className='text-xl font-bold flex gap-2 items-center relative after:absolute after:content-[""] after:w-[16px] after:h-[16px] after:rounded-4xl after:text-cyan-400 after:bg-white after:z-40 after:border-[2px] after:-left-[31px]'>Front-End Development <span className='text-xs font-normal uppercase'>(Intern)</span></h2>
                            <p className='font-bold  pt-1 text-sm uppercase'>jul,2024-sep,2024</p>
                            <p className='text-sm  '>WIT Institute</p>
                            <p className='pt-4 text-sm font-medium opacity-90 font-serif '>
                                I completed a Front-End Development internship at WIT Institute, where I gained hands-on experience building modern, responsive web applications.
                                My tasks included developing components with React.js, Next.js, and Tailwind CSS, improving UI performance, and collaborating with the team to implement best coding practices.
                            </p>
                        </div>
                        <div className='pt-10'>
                            <h2 className='text-xl font-bold flex gap-2 items-center relative after:absolute after:content-[""] after:w-[16px] after:h-[16px] after:rounded-4xl after:text-cyan-400 after:bg-white after:z-40 after:border-[2px] after:-left-[31px]'>Frontend Developer<span className='text-xs font-normal'>(Fiverr)</span></h2>
                            <p className='font-bold  pt-1 text-sm uppercase'>MAR, 2024 – PRESENT</p>

                            <p className='pt-4 text-sm font-medium opacity-90 font-serif '>
                                I work as a freelance Front-End Developer on Fiverr, creating custom, responsive web solutions for clients worldwide.
                                My work involves building websites using React.js, Next.js, Tailwind CSS, and modern web technologies, ensuring clean design, optimal performance, and cross-browser compatibility.
                                I collaborate closely with clients to turn their ideas into fully functional, visually appealing web applications.
                            </p>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default EducationAndExp
