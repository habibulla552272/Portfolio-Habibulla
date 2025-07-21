
import About from "@/Component/About/About";
import Banner from "@/Component/Banner/Banner";
import Contact from "@/Component/contact/Contact";
import Footer from "@/Component/Footer/Footer";
import Navebar from "@/Component/Navebar/Navebar";
import Protfolio from "@/Component/protfolio/Protfolio";
import Services from "@/Component/services/Services";



export default function Home() {
  return (
    <>
      <section className="flex">

        <div className=" absolute  w-1/2 md:static md:w-1/5">
          <Navebar />

        </div>
        <div className="w-full">
          <Banner />
          <About />
          <Protfolio />
          <Services />
          <Contact />
          <Footer />
        </div>

      </section>


    </>
  );
}
