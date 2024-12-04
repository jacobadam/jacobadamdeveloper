import HomeContact from "./HomeContact";
import HomeHero from "./HomeHero";
import HomeProjects from "./HomeProjects";
import HomeServices from "./HomeServices";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <HomeProjects />
      <HomeServices />
      <HomeContact />
    </div>
  );
}
