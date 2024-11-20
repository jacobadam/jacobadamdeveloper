import Hero from "./Hero";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0 blur-xl h-[580px] bg-slate-200"></div>
      <div className="relative">
        <Hero />
      </div>
    </div>
  );
}
