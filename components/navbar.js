import Link from "next/link";
import { Disclosure } from "@headlessui/react";

export default function Navbar() {
  const navigation = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Get a free quote", link: "/quote" },
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo & Mobile Menu */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                  <img
                    alt="logo"
                    src="/img/logo3.png"
                    height={40}
                    width={40}
                  />
                </Link>

                {/* Mobile Menu Button */}
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open ? (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    ) : (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                {/* Mobile Menu */}
                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  {navigation.map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                    >
                      {item.name}
                    </Link>
                  ))}
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* Desktop Menu */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href={menu.link}
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side (buttons, theme switcher, etc.) */}
        <div className="hidden mr-3 space-x-3 lg:flex nav__item">
          {/* Example button (uncomment if needed) */}
          {/* <Link
            href="/"
            className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
          >
            Get Started
          </Link> */}
        </div>
      </nav>
    </div>
  );
}
