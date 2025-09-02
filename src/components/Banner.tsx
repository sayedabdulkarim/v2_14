'use client';

export default function Banner() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold">Logo</div>
        <div className="flex gap-4">
          <a href="#" className="text-red-500 hover:text-red-400">Home</a>
          <a href="#" className="text-red-500 hover:text-red-400">About</a>
          <a href="#" className="text-red-500 hover:text-red-400">Services</a>
          <a href="#" className="text-red-500 hover:text-red-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}