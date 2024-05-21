import "./CorporatePrograms.css"

const CorporatePrograms = ({data}) => {
  return (
    <div className="corporate_programs_section">
      <h1 className="corporate_programs_section_title">Corporate Programs</h1>
      <div className="horizontal_line_design"></div>
      <div className="corporate_cards_container">
        {data.map((dataObj) => {
          return (
            <div className="corporate_card">
              <div className="corporate_card_head">
                <h3>{dataObj.head}</h3>
                <div className="corporate_card_head_design"></div>
              </div>
              <h3 className="corporate_card_title">{dataObj.title}</h3>
              <p className="corporate_card_desc">{dataObj.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default CorporatePrograms
