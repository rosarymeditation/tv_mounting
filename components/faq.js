import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Do I need to prepare anything before the installation?",
    answer:
      "No preparation is necessary. However, clearing the area around your TV location can help our technicians work more efficiently. If possible, confirm your preferred TV placement and ensure access to power outlets and any necessary cables.",
  },
  {
    question: "How long does a typical TV mounting service take?",
    answer:
      "Most installations take between 30 minutes to 1 hour, depending on the TV size and wall type. Complex setups, such as home theater installations, may require additional time.",
  },
  {
    question: "Can you mount TVs on all wall types?",
    answer:
      "Yes, we can mount TVs on drywall, brick, concrete, and plaster walls. Our technicians bring the tools and expertise to safely secure your TV on a variety of surfaces.",
  },
  {
    question: " Is cable management included? ",
    answer:
      "Yes! We provide cable management to keep your space looking tidy. We offer both basic and premium cable management options to meet your needs.",
  },
  {
    question: "Do you provide the mounting bracket?",
    answer:
      "Yes, we can provide a suitable mounting bracket upon request, or we can install one that you’ve already purchased. Just let us know your preference when booking.",
  },

  {
    question: "How do I schedule an installation?",
    answer:
      "Getting your quote is easy! Just select and enter the required details through our website, or contact us directly by phone or email. We’ll send you a free quote within 15 minutes, with no obligation or upfront payment required!",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Durham and neighboring towns, including Newcastle, Sunderland, and other parts of the North East. Contact us if you’re unsure, and we’ll be happy to confirm availability",
  },
  {
    question: "Can I reschedule or cancel my appointment?",
    answer:
      "You can reschedule or cancel your appointment with at least 24 hours' notice. Simply reach out to us using our contact information, and we'll assist you with the changes.",
  },
];
