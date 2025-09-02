'use client';

export default function Banner() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold">Logo</span>
            </div>
            <div className="hidden md:flex md:ml-6">
              <a href="#" className="text-orange-500 hover:text-orange-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#" className="text-orange-500 hover:text-orange-700 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#" className="text-orange-500 hover:text-orange-700 px-3 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="#" className="text-orange-500 hover:text-orange-700 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}