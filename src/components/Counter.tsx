'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount((prev) => Math.max(0, prev - 1));
  };

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="flex items-center gap-4 p-4">
      <button
        onClick={decrement}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        aria-label="Decrease count"
      >
        -
      </button>
      <span className="text-xl font-semibold min-w-[2ch] text-center">{count}</span>
      <button
        onClick={increment}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        aria-label="Increase count"
      >
        +
      </button>
    </div>
  );
}