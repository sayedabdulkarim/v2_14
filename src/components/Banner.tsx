'use client';

import Link from 'next/link';

export default function Banner() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-black font-bold text-xl">Logo</Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/" className="text-black hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link href="/about" className="text-black hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link href="/services" className="text-black hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
              <Link href="/contact" className="text-black hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}