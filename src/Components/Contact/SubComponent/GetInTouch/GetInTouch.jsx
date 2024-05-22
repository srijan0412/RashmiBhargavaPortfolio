import "./GetInTouch.css";

const GetInTouch = () => {
  return (
    <div className="get_in_touch_section">
      {/* Left Section  */}
      <div className="get_in_touch_left">
        <h1>
          Get in <span className="gitl_span">touch</span>
        </h1>
        <p>
          Aneeta's methodology differentiates her from other coaches and ensures
          clients receive unsurpassed service at all stages of their life,
          health, relationships and career.
        </p>
        <div className="contact_form">
          <label className="contact_input_label" htmlFor="name">Name</label>
          <input className="contact_input" type="text" id="name" required/>

          <label className="contact_input_label" htmlFor="email">Email</label>
          <input className="contact_input" type="text" id="email" required/>

          <label className="contact_input_label" htmlFor="">Phone</label>
          <input className="contact_input" type="text" id="phone" required/>

          <label className="contact_input_label" htmlFor="">Message</label>
          <textarea className="contact_input" type="text" required/>

          <button type="submit" className="contact_input_btn">Submit</button>
        </div>
      </div>

      {/* Right Section  */}
      <div className="get_in_touch_right">
        {/* Card 1 */}
        <div className="contact_card">
          <div className="contact_card_icon">
            <ion-icon name="location-outline"></ion-icon>
          </div>
          <h4>Address</h4>
          <div className="contact_card_design"></div>
          <p>
            Suite 102, Thirty Six – Turner Road, A Wing, Bandra West, Mumbai,
            Maharashtra - 400050
          </p>
        </div>

        {/* Card 2  */}
        <div className="contact_card">
          <div className="contact_card_icon">
            <ion-icon name="call-outline"></ion-icon>
          </div>
          <h4>Call us</h4>
          <div className="contact_card_design"></div>
          <p>+91 9820 006746</p>
        </div>

        {/* Card 3  */}
        <div className="contact_card">
          <div className="contact_card_icon">
            <ion-icon name="mail-outline"></ion-icon>
          </div>
          <h4>Email</h4>
          <div className="contact_card_design"></div>
          <p>info@openspaces.in</p>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
