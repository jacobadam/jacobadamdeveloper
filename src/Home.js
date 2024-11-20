import HomeDivider from "./HomeDivider";
import HomeHero from "./HomeHero";
import HomePortfolio from "./HomePortfolio";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0 blur-xl h-[580px] bg-slate-200"></div>
      <div className="relative">
        <HomeHero />
        <HomeDivider />
        <HomePortfolio />
      </div>
    </div>
  );
}
