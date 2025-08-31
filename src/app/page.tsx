import Banner from "@/components/Banner";
import Counter from "@/components/Counter";
import Footer from "@/components/Footer";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Banner />
      <div className="flex-1 container mx-auto px-4 py-8">
        <Counter />
        <Card 
          title="Sample Title"
          description="Sample Description"
          imageUrl="/sample-image.jpg"
        />
      </div>
      <Footer />
    </div>
  );
}