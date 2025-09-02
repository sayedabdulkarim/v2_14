'use client';

export default function Banner() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Logo</div>
        <div className="space-x-4">
          <a href="#" className="text-blue-400 hover:text-blue-300">Home</a>
          <a href="#" className="text-blue-400 hover:text-blue-300">About</a>
          <a href="#" className="text-blue-400 hover:text-blue-300">Services</a>
          <a href="#" className="text-blue-400 hover:text-blue-300">Contact</a>
        </div>
      </div>
    </nav>
  );
}