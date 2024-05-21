import { CorporatePrograms, Hero, HeroCards } from "./SubComponent";
import { HeroData, HeroCardsData, CorporateProgramsCardsData } from "../../Data";

const Home = () => {
  return (
    <>
      <Hero data={HeroData} />
      <HeroCards data={HeroCardsData}/>
      <CorporatePrograms data={CorporateProgramsCardsData} />
    </>
  )
}

export default Home
