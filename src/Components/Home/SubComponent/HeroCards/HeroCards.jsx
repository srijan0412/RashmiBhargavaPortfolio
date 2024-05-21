import "./HeroCards.css";

const HeroCards = ({ data }) => {
  return (
    <div className="hero_cards_container">
      {data.map((dataObj) => {
        return (
          <div className={`hero_card ${dataObj.key%2 == 1 ? "dark_green" : "light_green"} ${dataObj.key==1 ? "first_card" : ""}`} key={dataObj.key}>
            <div className="hero_card_innercontainer">
              <h3>{dataObj.title}</h3>
              <p>{dataObj.desc}</p>
              <div className="card_cta">
                <a href={dataObj.link}>{dataObj.cta}</a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HeroCards;
