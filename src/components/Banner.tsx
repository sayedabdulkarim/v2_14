'use client';

import Link from 'next/link';

export default function Banner() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex gap-4">
        <li><Link href="/" className="text-yellow-400 hover:text-yellow-300">Home</Link></li>
        <li><Link href="/about" className="text-yellow-400 hover:text-yellow-300">About</Link></li>
        <li><Link href="/contact" className="text-yellow-400 hover:text-yellow-300">Contact</Link></li>
      </ul>
    </nav>
  );
}