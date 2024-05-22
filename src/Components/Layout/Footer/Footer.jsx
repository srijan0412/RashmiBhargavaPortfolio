import { Link } from "react-router-dom";
import { RashmiLogoWhite } from "../../../Assets";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Footer Top  */}
      <div className="footer_top">
        <Link to="/" id="footer_logo">
          <img src={RashmiLogoWhite} alt="Rashmi Bhargava" />
        </Link>
        <div className="footer_top_right">
          <p>Visit me on social networks:</p>
          <ul className="social_links_footer">
            <li>
              <a href="">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
            <li>
              <a href="">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a href="">
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </li>
            <li>
              <a href="">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
            <li>
              <a href="">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Mid  */}
      <div className="footer_mid">
        {/* Contacts  */}
        <div className="footer_mid_subcolumn">
          <h3>Contacts</h3>
          <div className="horizontal_design"></div>
          <div className="footer_contacts">
            <ion-icon name="call-outline"></ion-icon>
            <p>+91 9820 006746</p>
          </div>
          <div className="footer_contacts">
            <ion-icon name="mail-outline"></ion-icon>
            <p>info@openspaces.in</p>
          </div>
          <div className="footer_contacts">
            <ion-icon name="pin-outline"></ion-icon>
            <p>
              Suite 102, Thirty Six - Turner Road, A Wing, Bandra West, Mumbai,
              Maharashtra - 400050
            </p>
          </div>
        </div>

        {/* Links  */}
        <div className="footer_mid_subcolumn">
          <h3>Links</h3>
          <div className="horizontal_design"></div>
          <Link to="" className="footer_link_element">
            Home
          </Link>
          <Link to="about" className="footer_link_element">
            About
          </Link>
          <Link to="awards" className="footer_link_element">
            Awards
          </Link>
          <Link to="contact" className="footer_link_element">
            Contact
          </Link>
        </div>

        {/* Latest from instagram  */}
        <div className="footer_mid_subcolumn">
          <h3>Latest from instagram</h3>
          <div className="horizontal_design"></div>
          <div className="footer_instagram_container">
            <div className="instagram_images">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Instagram image"
                className="instagram_recent_img"
              />
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Instagram image"
                className="instagram_recent_img"
              />
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Instagram image"
                className="instagram_recent_img"
              />
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Instagram image"
                className="instagram_recent_img"
              />
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Instagram image"
                className="instagram_recent_img"
              />
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Instagram image"
                className="instagram_recent_img"
              />
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Instagram image"
                className="instagram_recent_img"
              />
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Instagram image"
                className="instagram_recent_img"
              />
            </div>
            <a href="" className="footer_instagram_link">
              <ion-icon name="logo-instagram"></ion-icon>
              <p>follow on instagram</p>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom  */}
      <div className="footer_bottom">
        <p>Copyright by <span className="footer_bottom_bold">Rashmibhargava.com</span>. All rights reserved. | Developed by Astra Developers</p>
      </div>
    </footer>
  );
};

export default Footer;
