import HomeContact from "./HomeContact";
import HomeHero from "./HomeHero";
import HomePortfolio from "./HomePortfolio";
import HomeServices from "./HomeServices";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <HomePortfolio />
      <HomeServices />
      <HomeContact />
    </div>
  );
}
