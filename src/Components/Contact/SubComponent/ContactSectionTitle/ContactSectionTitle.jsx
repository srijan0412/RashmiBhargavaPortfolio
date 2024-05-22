import "./ContactSectionTitle.css";

const ContactSectionTitle = ({ data }) => {
  return (
    <div className="contact_section_top">
      <div className="contact_section_top_data">
        <h1>
          {data.title}  <br/>
          <span className="contact_section_top_span">{data.subtitle}</span>
        </h1>
        <p>{data.desc}</p>
      </div>
    </div>
  );
};

export default ContactSectionTitle;
