import Footer from '@/Component/Footer/Footer'
import Navebar from '@/Component/Navebar/Navebar'
import Services from '@/Component/services/Services'
import React from 'react'

const page = () => {
    return (
        <>
            <section className="flex">

                <div className=" absolute  w-1/2 md:static md:w-1/5">
                    <Navebar />

                </div>
                <div className="w-full">

                    <Services />

                    <Footer />
                </div>

            </section>

        </>
    )
}

export default page
