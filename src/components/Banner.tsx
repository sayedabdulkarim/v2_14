'use client';

import Link from 'next/link';

export default function Banner() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">Logo</div>
          <div className="space-x-6">
            <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
            <Link href="/about" className="text-blue-600 hover:text-blue-800">About</Link>
            <Link href="/contact" className="text-blue-600 hover:text-blue-800">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}