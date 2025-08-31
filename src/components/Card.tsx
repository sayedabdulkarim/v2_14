'use client';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function Card({ title, description, imageUrl }: CardProps) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-600 text-base">{description}</p>
      </div>
    </div>
  );
}