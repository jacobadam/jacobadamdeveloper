import HomeContact from "./HomeContact.jsx";
import HomeHero from "./HomeHero.jsx";
import HomeProjects from "./HomeProjects.jsx";
import HomeServices from "./HomeServices.jsx";

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
