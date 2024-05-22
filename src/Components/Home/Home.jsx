import { CorporatePrograms, Hero, HeroCards, GetStarted } from "./SubComponent";
import { HeroData, HeroCardsData, CorporateProgramsCardsData, GetStartedData } from "../../Data";

const Home = () => {
  return (
    <>
      <Hero data={HeroData} />
      <HeroCards data={HeroCardsData}/>
      <CorporatePrograms data={CorporateProgramsCardsData} />
      <GetStarted data={GetStartedData}/>
    </>
  )
}

export default Home
