import "./MyBelief.css";
import { Quote_green, RashmiSignature } from "../../../../Assets";

const MyBelief = ({data}) => {
  return (
    <div className="my_belief_section">
      <div className="my_belief_data_container">
        <img className="my_belief_quote" src={Quote_green} />
        <p>{data.title}</p>
        <p>{data.subtitle}</p>
        <img className="my_belief_signature" src={RashmiSignature} />
      </div>
    </div>
  )
}

export default MyBelief
