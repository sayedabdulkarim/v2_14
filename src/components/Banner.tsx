'use client';

export default function Banner() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Welcome to Counter App</h1>
        <p className="text-lg opacity-90">
          A simple yet powerful counter application built with Next.js and Tailwind CSS.
          Click the buttons below to increment or decrement the counter value.
        </p>
      </div>
    </div>
  );
}