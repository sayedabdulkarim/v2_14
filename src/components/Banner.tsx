'use client';

export default function Banner() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <a href="/" className="text-brown-600 hover:text-brown-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
              Home
            </a>
            <a href="/about" className="text-brown-600 hover:text-brown-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
              About
            </a>
            <a href="/contact" className="text-brown-600 hover:text-brown-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}