import Banner from "@/components/Banner";
import Counter from "@/components/Counter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Banner />
      <div className="flex-1 flex items-center justify-center">
        <Counter />
      </div>
    </div>
  );
}