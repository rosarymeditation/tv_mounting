import { useState } from "react";
import Navbar from "../../components/navbar";
import Head from "next/head";

import { MailOpenIcon } from "@heroicons/react/solid";
import { PhoneIcon } from "@heroicons/react/outline";

const BookingPage = () => {
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [tvSize, setTvSize] = useState("");
  const [wallType, setWallType] = useState("");
  const [mountType, setMountType] = useState("");
  const [hasBracket, setHasBracket] = useState("");
  const [bracketType, setBracketType] = useState("");
  const [confirmation, setConfirmation] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const bookingData = {
      name,
      email,
      phone,
      location,
      tvSize,
      wallType,
      hasBracket,
      bracketType,
      message,
    };

    try {
      const response = await fetch("/api/quotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        setConfirmation("Your request has been successfully submitted!");
      } else {
        setConfirmation(
          "There was an error submitting your request. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting your request:", error);
      setConfirmation(
        "There was an error submitting your request. Please try again."
      );
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <Head>
        <title>
          TV Mounting Services in Durham, Newcastle & Sunderland - Free Quote
        </title>
        <meta
          name="description"
          content="Professional TV wall mounting services in Durham, Newcastle, Sunderland, Gateshead, Hartlepool, and nearby areas. Get a free quote today!"
        />
        <meta
          name="keywords"
          content="TV mounting Durham, TV wall installation Newcastle, TV mounting Sunderland, Tyne and Wear TV services, North East TV mounting, affordable TV wall mounting"
        />
        <meta name="author" content="Tyne Wear TV Mounting" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph (OG) Tags */}
        <meta
          property="og:title"
          content="TV Mounting Services in Durham, Newcastle & Sunderland"
        />
        <meta
          property="og:description"
          content="Secure and stylish TV mounting services in Durham, Newcastle, Sunderland, and nearby towns. Get a free quote today!"
        />
        <meta property="og:image" content="/img/mount.jpg" />
        <meta
          property="og:url"
          content="https://www.tyneweartvmounting.co.uk/quote"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Get TV Mounting Services in Durham, Newcastle & Sunderland"
        />
        <meta
          name="twitter:description"
          content="Affordable TV mounting services in the North East. Request a free quote today!"
        />
        <meta name="twitter:image" content="/img/mount.jpg" />

        {/* Schema Markup for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Tyne Wear TV Mounting",
                "image": "/img/mount.jpg",
                "telephone": "+44 7394 651360",
                "email": "info@tyneweartvmounting.co.uk",
                
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
      <img
        className="h-auto max-w-full"
        src="/img/banner2.jpg"
        alt="TV mounting services in Durham, Newcastle, Sunderland and nearby towns"
      />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-900">
          Get a Free Quote in 15 Minutes
        </h1>
        <p className="text-center text-gray-700 mb-8">
          Serving Durham, Newcastle, Sunderland, Gateshead, and other nearby
          towns. Get your free quote in 15 minutes or less!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Contact Information
            </h2>
            <p className="text-gray-700 mb-4">
              We’d love to hear from you! Reach out by phone or email:
            </p>
            <div className="flex items-center mb-4">
              <PhoneIcon className="w-6 h-6 text-blue-500 mr-3" />
              <span className="text-lg font-medium text-gray-900">
                07394 651360
              </span>
            </div>
            <div className="flex items-center mb-4">
              <MailOpenIcon className="w-6 h-6 text-blue-500 mr-3" />
              <span className="text-lg font-medium text-gray-900">
                info@tyneweartvmounting.co.uk
              </span>
            </div>
            <p className="text-gray-700 mt-4">
              Alternatively, use the form to send us a request. We aim to
              respond within 15 minutes. Thank you!
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            {!confirmation ? (
              <form
                onSubmit={handleBookingSubmit}
                className="space-y-6"
                id="booking-form"
              >
                {/* Form content remains unchanged */}
              </form>
            ) : (
              <Alert color="green">
                <span>{confirmation}</span>
              </Alert>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingPage;
