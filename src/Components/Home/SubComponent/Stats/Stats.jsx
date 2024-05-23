import "./Stats.css";
import { PeoplesBG } from "../../../../Assets";

const Stats = ({data}) => {
  return (
    <div className='stats_section'>
      <img src={PeoplesBG} className="stats_section_left"/>
      <div className="stats_section_right">
        <h1 className="stats_section_heading">{data.title}</h1>
        <p className="stats_section_desc">{data.desc}</p>
        <div className="stats_area">
          {data.stats.map((dataObj) => {
            return (
              <div className="stats_card" key={dataObj.key}>
                <h1>{dataObj.value}</h1>
                <h3>{dataObj.title}</h3>
                <div className="stats_design"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Stats
