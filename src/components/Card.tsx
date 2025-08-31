import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function Card({ title, description, imageUrl }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <Image 
        src={imageUrl} 
        alt={title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}