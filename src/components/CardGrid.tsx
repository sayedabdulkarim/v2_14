import Card from './Card';

export default function CardGrid() {
  const cards = [
    {
      title: "Mountain Adventure",
      description: "Explore the breathtaking views of the Swiss Alps with our guided tours.",
      imageUrl: "/images/mountains.jpg"
    },
    {
      title: "Beach Getaway",
      description: "Relax on pristine beaches with crystal clear waters and white sand.",
      imageUrl: "/images/beach.jpg"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
}