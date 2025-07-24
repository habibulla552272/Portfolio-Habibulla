import About from '@/Component/About/About'
import Footer from '@/Component/Footer/Footer'
import Navebar from '@/Component/Navebar/Navebar'
import React from 'react'

const page = () => {
    return (
        <>
            <section className="flex">

                <div className=" absolute  w-1/2 md:static md:w-1/5">
                    <Navebar />

                </div>
                <div className="w-full">

                    <About />

                    <Footer />
                </div>

            </section>

        </>
    )
}

export default page
