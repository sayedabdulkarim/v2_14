import Banner from "@/components/Banner";
import Counter from "@/components/Counter";
import Footer from "@/components/Footer";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Banner />
      <div className="flex-grow container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome</h1>
        <Counter />
        <Card 
          title="Sample Card"
          description="This is a sample card description"
          imageUrl="/sample-image.jpg"
        />
      </div>
      <Footer />
    </div>
  );
}