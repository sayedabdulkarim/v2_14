'use client';

export default function Banner() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold">Logo</h1>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a href="#" className="text-green-600 hover:text-green-800 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-green-600">
                Home
              </a>
              <a href="#" className="text-green-600 hover:text-green-800 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-green-600">
                About
              </a>
              <a href="#" className="text-green-600 hover:text-green-800 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-green-600">
                Services
              </a>
              <a href="#" className="text-green-600 hover:text-green-800 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-green-600">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}