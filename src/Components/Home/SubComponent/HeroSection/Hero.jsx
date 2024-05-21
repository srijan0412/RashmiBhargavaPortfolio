import "./Hero.css"

const Hero = ({data}) => {
  return (
    <div className="hero_section"> 
      <div className="hero_data_container">
        <h1>{data.title} <span className="hero_span">{data.subtitle}</span></h1>
        <p>{data.desc}</p>
        <a href="">{data.cta}</a>
        {/* Href need to be specified above here  */}
      </div>
    </div>
  )
}

export default Hero
