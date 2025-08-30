import Banner from "@/components/Banner";
import Counter from "@/components/Counter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Banner />
      <div className="flex-1 flex items-center justify-center">
        <Counter />
      </div>
      <Footer />
    </div>
  );
}