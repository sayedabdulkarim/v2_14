'use client';

import Link from 'next/link';

export default function Banner() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-brown-700 font-bold text-xl">Logo</Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/" className="text-brown-600 hover:text-brown-800 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-brown-300">
                Home
              </Link>
              <Link href="/about" className="text-brown-600 hover:text-brown-800 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-brown-300">
                About
              </Link>
              <Link href="/services" className="text-brown-600 hover:text-brown-800 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-brown-300">
                Services
              </Link>
              <Link href="/contact" className="text-brown-600 hover:text-brown-800 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-brown-300">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}