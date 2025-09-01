import Link from 'next/link';

export default function Banner() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-red-500 font-bold text-xl">Logo</Link>
        <div className="space-x-4">
          <Link href="/" className="text-red-500 hover:text-red-400">Home</Link>
          <Link href="/about" className="text-red-500 hover:text-red-400">About</Link>
          <Link href="/contact" className="text-red-500 hover:text-red-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
}