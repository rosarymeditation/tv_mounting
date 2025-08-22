import Head from "next/head";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - TyneWear TV Mounting</title>
        <meta
          name="description"
          content="Learn about how TyneWear TV Mounting collects, uses, and protects your personal data. Your privacy is our priority."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6">Privacy Policy</h1>

        <p className="text-gray-700 mb-6">
          At TyneWear TV Mounting, we are committed to protecting your privacy.
          This Privacy Policy outlines how we collect, use, and safeguard your
          personal information when you visit our website or use our services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">
          1. Information We Collect
        </h2>
        <p className="text-gray-700">
          We may collect the following information:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Your name, email address, phone number, and location.</li>
          <li>Details about your service inquiries or bookings.</li>
          <li>
            Technical data such as your IP address, browser type, and usage
            patterns when you visit our website.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-4">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-700">The information we collect is used for:</p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Providing and managing our services.</li>
          <li>Responding to inquiries and service requests.</li>
          <li>Improving our website and customer experience.</li>
          <li>Sending promotional emails (only if you have opted in).</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-4">
          3. Information Sharing
        </h2>
        <p className="text-gray-700 mb-6">
          We do not sell, trade, or rent your personal information to others.
          However, we may share your information with trusted third parties who
          assist us in operating our website or providing services, as long as
          they agree to keep your information confidential.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">4. Data Security</h2>
        <p className="text-gray-700 mb-6">
          We implement appropriate security measures to protect your personal
          information from unauthorized access, disclosure, or destruction.
          However, no method of transmission over the internet is 100% secure,
          and we cannot guarantee absolute security.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">5. Your Rights</h2>
        <p className="text-gray-700 mb-6">You have the right to:</p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Access the personal data we hold about you.</li>
          <li>Request corrections to incorrect or incomplete information.</li>
          <li>
            Request the deletion of your personal data, subject to legal
            obligations.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-4">
          6. Changes to This Policy
        </h2>
        <p className="text-gray-700 mb-6">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page, and the updated policy will take effect
          immediately upon posting.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">7. Get a free quote</h2>
        <p className="text-gray-700">
          If you have any questions about this Privacy Policy or how we handle
          your data, please contact us at:
        </p>
        <p className="text-gray-700 mt-2">
          <strong>Email:</strong> info@TyneWear TV Mounting.co.uk
        </p>
        <p className="text-gray-700 mt-2">
          <strong>Phone:</strong> 07394 651360
        </p>
      </div>
      <Footer />
    </>
  );
}
