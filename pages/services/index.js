import Head from "next/head";
import Hero from "../../components/hero";
import Navbar from "../../components/navbar";
import SectionTitle from "../../components/sectionTitle";

import { benefitOne, benefitTwo } from "../../components/data";
import Video from "../../components/video";
import Benefits from "../../components/benefits";
import Footer from "../../components/footer";
import Testimonials from "../../components/testimonials";
import Cta from "../../components/cta";
import Faq from "../../components/faq";
import PopupWidget from "../../components/popupWidget";

export default function Services() {
  return (
    <>
      <Head>
        <title>
          Professional TV Mounting & Shelving Services in Durham, Newcastle & Sunderland
        </title>
        <meta
          name="description"
          content="Explore expert TV mounting and shelving services by Tyne Wear TV Mounting in Durham, Newcastle, Sunderland, Gateshead, and across the North East. Secure, stylish, and hassle-free installations."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <SectionTitle
          pretitle="Our Services"
          title="TV Mounting and Shelving Services in the North East"
        >
          We provide professional TV mounting and shelving solutions tailored to
          your home or business. Whether it's creating a modern entertainment
          setup or optimizing your storage, our experienced team has you covered
          across Durham, Newcastle, Sunderland, and surrounding areas.
        </SectionTitle>

        <div className="py-6">
          <h3 className="text-xl font-semibold">TV Mounting</h3>
          <p className="mt-2 text-gray-700">
            Our TV mounting service ensures your television is securely
            installed on the wall for optimal viewing and safety. Enjoy a sleek,
            cable-free look that enhances your space. From consultation to
            installation, our team makes the process simple and stress-free.
          </p>
        </div>

        <div className="py-6">
          <h3 className="text-xl font-semibold">Shelving</h3>
          <p className="mt-2 text-gray-700">
            Maximize your space with our custom shelving installations. From
            floating shelves to integrated storage, we provide stylish and
            functional solutions to suit your decor. Whether you want practical
            storage or a feature display, we deliver with precision.
          </p>
        </div>

        <div className="py-6">
          <h3 className="text-xl font-semibold">Why Choose Us?</h3>
          <p className="mt-2 text-gray-700">
            At Tyne Wear TV Mounting, we prioritize quality, safety, and
            customer satisfaction. With years of experience serving Durham,
            Newcastle, Sunderland, and the wider North East, we guarantee
            professional results that enhance your living or working space.
          </p>
        </div>
      </div>

      <Footer />
      <PopupWidget />
    </>
  );
}
