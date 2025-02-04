import Image from 'next/image'
import React from 'react'
import logo from "../../../assets/Logo-Main.png"
import { MoveRight } from 'lucide-react'
import Link from 'next/link'
export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-white ">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 p-5">
          <div className="">
            <Image src={logo} alt="BULIPE Logo" className="mb-4" />
            <p className="text-sm text-gray-400">
              Bulipe Tech as a visionary agent collaborates with its parent
              companies from the US and UK to bring forth a far-reaching Digital
              Skills Development project for the everchanging workforce of
              Bangladesh.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-sky-600 bg-white rounded-full p-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35C.592 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h21.351C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0zM7.429 20.295H3.644V9h3.785v11.295zm-1.892-12.85c-1.207 0-2.182-.975-2.182-2.182S4.33 3.081 5.537 3.081c1.207 0 2.182.975 2.182 2.182s-.975 2.182-2.182 2.182zM20.295 20.295h-3.786v-5.593c0-1.333-.025-3.045-1.854-3.045-1.855 0-2.14 1.45-2.14 2.951v5.687H8.725V9h3.63v1.54h.05c.506-.958 1.742-1.967 3.588-1.967 3.836 0 4.542 2.525 4.542 5.813v6.91z" />
                </svg>
              </a>
              <a href="#" className="text-rose-600 bg-white rounded-full p-2  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c-5.304 0-9.613 4.309-9.613 9.613 0 4.263 2.656 7.868 6.356 9.14-.087-.775-.164-1.968.034-2.814.177-.78 1.146-4.965 1.146-4.965s-.293-.586-.293-1.452c0-1.359.79-2.373 1.774-2.373.838 0 1.243.629 1.243 1.385 0 .845-.537 2.109-.814 3.285-.231.986.49 1.792 1.452 1.792 1.743 0 3.085-1.841 3.085-4.495 0-2.348-1.689-3.982-4.101-3.982-2.792 0-4.431 2.091-4.431 4.253 0 .844.325 1.75.732 2.242.081.096.092.181.069.278-.075.313-.244 1.037-.277 1.179-.043.18-.141.219-.326.132-1.221-.569-1.979-2.348-1.979-3.786 0-3.071 2.231-5.897 6.426-5.897 3.369 0 5.982 2.406 5.982 5.625 0 3.342-2.096 6.031-5.005 6.031-1.001 0-1.942-.52-2.263-1.136 0 0-.54 2.056-.668 2.553-.197.758-.729 1.706-1.09 2.287.818.253 1.682.392 2.579.392 5.304 0 9.613-4.309 9.613-9.613S17.304 2.163 12 2.163z" />
                </svg>
              </a>
              <a href="#" className="text-sky-600 bg-white rounded-full p-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.611 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.955-2.178-1.555-3.594-1.555-2.719 0-4.924 2.205-4.924 4.924 0 .386.044.762.127 1.124-4.092-.205-7.719-2.166-10.148-5.144-.424.729-.666 1.574-.666 2.476 0 1.708.869 3.215 2.19 4.099-.807-.026-1.566-.247-2.229-.616v.062c0 2.388 1.698 4.384 3.95 4.836-.413.113-.849.173-1.296.173-.317 0-.626-.031-.928-.088.627 1.956 2.445 3.379 4.6 3.419-1.683 1.319-3.809 2.105-6.114 2.105-.397 0-.788-.023-1.175-.068 2.179 1.398 4.768 2.212 7.548 2.212 9.054 0 14.001-7.498 14.001-13.986 0-.213-.005-.425-.014-.637.961-.695 1.8-1.562 2.46-2.549z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Addresses</h3>
            <p className="text-sm text-gray-400">Mobile: 01712 944 876</p>
            <p className="text-sm text-gray-400">info@bulipe.com</p>
            <p className="text-sm text-gray-400">
              House: B2, Road: 23/16, Block: A, Banani, Dhaka-1213
            </p>
            <a href="#" className="text-primary-normal mt-2 inline-block">
              Country Offices
            </a>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-primary-normal">
              <li className="flex gap-2 items-center">
                <MoveRight strokeWidth={3} size={16} />
                <Link href="/" className="text-primary-normal hover:underline">
                  Home
                </Link>
              </li>
              <li className="flex gap-2 items-center">
                <MoveRight strokeWidth={3} size={16} />
                <Link
                  href="/about"
                  className="text-primary-normal hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li className="flex gap-2 items-center">
                <MoveRight strokeWidth={3} size={16} />
                <Link
                  href="/programs"
                  className="text-primary-normal hover:underline"
                >
                  Our Programs
                </Link>
              </li>
              <li className="flex gap-2 items-center">
                <MoveRight strokeWidth={3} size={16} />
                <Link
                  href="/career"
                  className="text-primary-normal hover:underline"
                >
                  Career & Placement
                </Link>
              </li>
              <li className="flex gap-2 items-center">
                <MoveRight strokeWidth={3} size={16} />
                <Link
                  href="/contact"
                  className="text-primary-normal hover:underline"
                >
                  Contact Us
                </Link>
              </li>
              <li className="flex gap-2 items-center">
                <MoveRight strokeWidth={3} size={16} />
                <Link
                  href="/news"
                  className="text-primary-normal hover:underline "
                >
                  News & Media
                </Link>
              </li>
              <li className="flex gap-2 items-center">
                <MoveRight strokeWidth={3} size={16} />
                <Link
                  href="/policy"
                  className="text-primary-normal hover:underline "
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Get the App</h3>
            <div className="flex flex-col space-y-2">
              <a
                href="#"
                className="bg-gray-800 text-white px-4 py-2 rounded-md flex items-center space-x-2"
              >
                {/* <img src="https://via.placeholder.com/20" alt="App Store" className="w-5 h-5"> */}
                <span>Download on the App Store</span>
              </a>
              <a
                href="#"
                className="bg-gray-800 text-white px-4 py-2 rounded-md flex items-center space-x-2"
              >
                {/* <img src="https://via.placeholder.com/20" alt="Google Play" className="w-5 h-5"> */}
                <span>Get it on Google Play</span>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 py-4 mt-10">
          <p className="text-center text-sm text-gray-500">
            © 2025{" "}
            <span className="text-primary-normal">Bulipe Tech Limited</span> all
            rights reserved.
          </p>
          <div className="w-72 h-0.5 bg-gray-500 mx-auto mt-2 rounded"></div>

          {/* <div className="w-full">
            <p className="mt-5 text-center text-sm  text-gray-500 lg:px-[20%] ">
              The quick brown fox jumps over the lazy dog. The quick brown fox
              jumps over the lazy dog once upon a time. The quick brown fox
              jumps over the lazy dog. The quick brown fox jumps over the lazy
              dog once upon a time. The quick brown fox jumps over the lazy dog.
              The lazy dog once upon a time. The quick brown fox jumps over the
              lazy dog. The quick brown fox jumps over the lazy dog once upon a
              time.
            </p>
          </div> */}
        </div>
      </footer>
    </div>
  );
}
