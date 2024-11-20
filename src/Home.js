import HomeDivider from "./HomeDivider";
import HomeHero from "./HomeHero";
import HomePortfolio from "./HomePortfolio";
import HomeServices from "./HomeServices";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0 blur-xl bg-slate-200"></div>
      <div className="relative">
        <HomeHero />
        <HomeDivider />
        <HomePortfolio />
        <HomeDivider />
        <HomeServices />
        <HomeDivider />
      </div>
    </div>
  );
}
