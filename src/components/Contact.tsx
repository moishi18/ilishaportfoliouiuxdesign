import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/ilisha-dabas-84b07b27b/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — ilishadabas
              </a>
            </p>
            <h4>Education</h4>
            <p>
              Bachelors in Design, Delhi Technological University (DTU), Delhi — 2024–2028
            </p>
            <p>
                Delhi Public School (D.P.S) , Rohini, New Delhi —
              2016–2023
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.linkedin.com/in/ilisha-dabas-84b07b27b/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://www.behance.net/ilishadabas"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Behance <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Ilisha Dabas</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
