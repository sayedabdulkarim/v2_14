'use client';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-gray-800">Logo</a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="/profile" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Profile</a>
            <a href="/services" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Services</a>
          </div>
        </div>
      </div>
    </nav>
  );
}