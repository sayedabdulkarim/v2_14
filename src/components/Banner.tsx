'use client';

import Link from 'next/link';

export default function Banner() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold">Logo</div>
        <div className="flex space-x-4">
          <Link href="/" className="text-blue-400 hover:text-blue-300">Home</Link>
          <Link href="/about" className="text-blue-400 hover:text-blue-300">About</Link>
          <Link href="/contact" className="text-blue-400 hover:text-blue-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
}