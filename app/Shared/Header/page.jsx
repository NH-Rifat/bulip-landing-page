'use client';
import { UserRoundPlus, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading spinner
  }
  const spanClass =
    ' block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700';

  const handleCloseBanner = () => {
    setIsBannerVisible(false);
  };

  return (
    <div className="font-unbunt fixed z-50 top-0 w-full">
      {/* <!-- BEGIN :: Banner --> */}
      <>
        {isBannerVisible && (
          <section
            className="w-full bg-info-secondary-light"
            role="banner"
            aria-label="Scholarship Information Banner"
          >
            <div className="container mx-auto">
              <div className="flex flex-col md:flex-row justify-center">
                <div className="flex flex-row gap-2 lg:gap-4 p-2">
                  <div
                    className="my-auto text-4xl font-bold tracking-wide leading-none text-center"
                    aria-label="Scholarship Percentage"
                  >
                    <span className="bg-gradient-to-b from-primary-normal to-orange-400 inline-block text-transparent bg-clip-text">
                      100%
                    </span>
                  </div>
                  <div
                    className="self-stretch p-1.5 my-auto text-center text-sm text-sky-900 rounded-xl border border-sky-900 border-solid"
                    role="text"
                    aria-label="Scholarship Coverage"
                  >
                    <span className="text-red-500">Scholarship</span> on all of
                    our programs
                  </div>
                </div>
                <div className="flex flex-row gap-2 lg:gap-4 p-2 justify-center">
                  <div
                    className="text-sm my-auto leading-6 text-sky-900"
                    role="text"
                    aria-label="Eligibility Information"
                  >
                    Exclusively for the physically challenged, and third-gender
                    communities!
                  </div>
                  <button
                    className="p-2 justify-items-end text-white"
                    onClick={handleCloseBanner}
                  >
                    <X strokeWidth={1.25} size={28} />
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </>
      {/* <!-- End Banner --> */}

      {/* <!-- BEGIN :: Navigation --> */}
      <div className="navbar bg-base-100 fixed z-10 backdrop-blur-sm items-center justify-around">
        <div className="navbar-start items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link
                  href="/"
                  className={`${
                    pathname === '/'
                      ? ' group text-info-secondary-active  '
                      : 'group text-gray-500 dark:text-white hover:text-info-secondary-active'
                  }`}
                >
                  Home
                  <span className={spanClass}></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`${
                    pathname === '/about'
                      ? ' group text-info-secondary-active  '
                      : 'group text-gray-500 dark:text-white hover:text-info-secondary-active'
                  }`}
                >
                  About Us
                  <span className={spanClass}></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className={`${
                    pathname === '/programs'
                      ? ' group text-info-secondary-active  '
                      : 'group text-gray-500 dark:text-white hover:text-info-secondary-active'
                  }`}
                >
                  Programs
                  <span className={spanClass}></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className={`${
                    pathname === '/locations'
                      ? ' group text-info-secondary-active  '
                      : 'group text-gray-500 dark:text-white hover:text-info-secondary-active'
                  }`}
                >
                  Locations
                  <span className={spanClass}></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/career"
                  className={`${
                    pathname === '/career'
                      ? ' group text-info-secondary-active  '
                      : 'group text-gray-500 dark:text-white hover:text-info-secondary-active'
                  }`}
                >
                  Career & Placement
                  <span className={spanClass}></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`${
                    pathname === '/contact'
                      ? ' group text-info-secondary-darker '
                      : 'group text-gray-500 dark:text-white hover:text-info-secondary-active'
                  }`}
                >
                  Contact Us
                  <span className={spanClass}></span>
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/">
            <Image
              src={'/assets/Logo-Main.png'}
              width={176}
              height={44}
              alt="Company Logo"
              className="object-contain w-44 cursor-pointer"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal gap-8 px-1">
            <li>
              <Link
                href="/"
                className={`${
                  pathname === '/'
                    ? ' group text-info-secondary-active  '
                    : 'group text-gray-500 dark:text-white hover:text-info-secondary-active'
                }`}
              >
                Home
                <span className={spanClass}></span>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`${
                  pathname === '/about'
                    ? ' group text-info-secondary-active  '
                    : 'group text-gray-500 dark:text-white hover:text-info-secondary-active'
                }`}
              >
                About Us
                <span className={spanClass}></span>
              </Link>
            </li>
            <li>
              <Link
                href="/programs"
                className={`${
                  pathname === '/programs'
                    ? ' group text-info-secondary-active  '
                    : 'group text-gray-500 dark:text-white hover:text-info-secondary-active'
                }`}
              >
                Programs
                <span className={spanClass}></span>
              </Link>
            </li>
            <li>
              <Link
                href="/locations"
                className={`${
                  pathname === '/locations'
                    ? ' group text-info-secondary-active  '
                    : 'group text-gray-500 dark:text-white hover:text-info-secondary-active'
                }`}
              >
                Locations
                <span className={spanClass}></span>
              </Link>
            </li>
            <li>
              <Link
                href="/career"
                className={`${
                  pathname === '/career'
                    ? ' group text-info-secondary-active  '
                    : 'group text-gray-500 dark:text-white hover:text-info-secondary-active'
                }`}
              >
                Career & Placement
                <span className={spanClass}></span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`${
                  pathname === '/contact'
                    ? ' group text-info-secondary-active  '
                    : 'group text-gray-500 dark:text-white hover:text-info-secondary-active'
                }`}
              >
                Contact Us
                <span className={spanClass}></span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="/sign-in" passHref>
            <button className="bg-primary-normal text-white px-4 py-2 rounded-full hover:bg-primary-normal-hover transition flex items-center gap-2  xl:mt-0">
              <span>Sign In</span> <UserRoundPlus strokeWidth={3} size={16} />
            </button>
          </Link>
        </div>
      </div>
      {/* <!-- End Navigation --> */}
    </div>
  );
}
