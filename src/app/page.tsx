import Banner from "@/components/Banner";
import Counter from "@/components/Counter";
import Footer from "@/components/Footer";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Banner />
      <div className="flex-1 flex flex-col items-center justify-center gap-8 py-8">
        <Counter />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          <Card 
            title="Feature 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            imageUrl="/placeholder.jpg"
          />
          <Card 
            title="Feature 2"
            description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            imageUrl="/placeholder.jpg"
          />
          <Card 
            title="Feature 3"
            description="Ut enim ad minim veniam, quis nostrud exercitation ullamco."
            imageUrl="/placeholder.jpg"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}