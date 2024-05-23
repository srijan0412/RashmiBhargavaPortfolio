import { CorporatePrograms, Hero, HeroCards, GetStarted, MyBelief, Stats, Recommendations } from "./SubComponent";
import { HeroData, HeroCardsData, CorporateProgramsCardsData, GetStartedData, BeliefsData, StatsData, CommentSectionData } from "../../Data";

const Home = () => {
  return (
    <>
      <Hero data={HeroData} />
      <HeroCards data={HeroCardsData}/>
      <CorporatePrograms data={CorporateProgramsCardsData} />
      <MyBelief data={BeliefsData}/>
      <Stats data={StatsData}/>
      <Recommendations data={CommentSectionData}/>
      <GetStarted data={GetStartedData}/>
    </>
  )
}

export default Home
