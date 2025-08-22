import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import { benefitOne, benefitTwo } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          TV Wall Mounting Durham - Professional Installations from £50
        </title>
        <meta
          name="description"
          content="Secure, affordable TV wall mounting in Durham. Expert installations across Newcastle, Sunderland, and the North East from just £50. Get your quote in 15 minutes!"
        />
        <meta
          name="keywords"
          content="TV wall mounting Durham, TV installation Newcastle, TV mounting services Sunderland, TV wall mounting North East, home theatre setup, TV mounting near me, affordable TV mounting"
        />
        <meta name="author" content="North East TV Mounting" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          property="og:title"
          content="TV Wall Mounting Durham - Expert Installations from £50"
        />
        <meta
          property="og:description"
          content="North East TV Mounting offers secure, stylish, and professional TV wall installations in Durham, Newcastle, Sunderland, and beyond. Prices start at just £50."
        />
        <meta property="og:image" content="/img/mount.jpg" />
        <meta
          property="og:url"
          content="https://www.northeasttvmounting.co.uk/"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="TV Wall Mounting Durham - Starting at Just £50"
        />
        <meta
          name="twitter:description"
          content="Affordable and secure TV mounting across Durham, Newcastle, and Sunderland. Get your quote in 15 minutes!"
        />
        <meta name="twitter:image" content="/img/mount2.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "North East TV Mounting",
                "image": "/img/mount.jpg",
                "telephone": "+44 7394 651360",
                "email": "info@northeasttvmounting.co.uk",
                
                "url": "https://www.tyneweartvmounting.co.uk/",
                "sameAs": [
                  "https://www.facebook.com/profile.php?id=61569642923198"
                ],
                "priceRange": "££",
                "areaServed": [
                  "Durham",
                  "Newcastle",
                  "Sunderland",
                  "Gateshead",
                  "Hartlepool",
                  "Middlesbrough",
                  "Stockton-on-Tees"
                ],
                "description": "Professional TV wall mounting services across Durham, Newcastle, Sunderland, and the North East. Affordable prices starting from £50."
              }
            `,
          }}
        ></script>
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Affordable TV Installations"
        title="Professional TV Wall Mounting Services in Durham & the North East"
      >
        <p className="text-xl font-semibold text-center text-red-600">
          Starting at just <span className="text-3xl">£50</span>!
        </p>
        <p className="text-gray-700 text-center">
          Get secure, stylish, and professional installations. Whether on
          drywall or solid walls, our expert team ensures a flawless finish
          every time.
        </p>
        <p className="text-xl font-semibold text-center text-green-600">
          <strong>Free Quote in Just 15 Minutes</strong>
        </p>
        <p className="text-gray-700 text-center mt-2">
          Contact us today for a fast, efficient quote. We're here to make your
          TV mounting experience smooth and hassle-free.
        </p>
      </SectionTitle>

      <SectionTitle
        pretitle="Why Choose Us?"
        title="The North East TV Mounting Experts"
      >
        <p className="text-lg text-gray-700 text-center">
          We are your trusted local specialists for TV wall mounting. From
          drywall to solid brick, our team delivers secure, stylish
          installations with precision and care across Durham, Newcastle,
          Sunderland, and the wider North East.
        </p>
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        pretitle="What Our Clients Say"
        title="Customer Testimonials"
      >
        Hear from our happy customers! We’ve helped countless clients across
        Durham, Newcastle, Sunderland, and the wider North East enjoy seamless,
        professional TV installations.
      </SectionTitle>
      <Testimonials />

      <SectionTitle pretitle="FAQ" title="Your Questions Answered">
        Have questions about our services or the installation process? We’ve got
        answers! Contact us for a quick quote and expert advice.
      </SectionTitle>
      <Faq />

      <Footer />
      <PopupWidget />
    </>
  );
}
