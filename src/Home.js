import HomeContact from "./HomeContact.js";
import HomeHero from "./HomeHero.js";
import HomeProjects from "./HomeProjects.js";
import HomeServices from "./HomeServices.js";

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
