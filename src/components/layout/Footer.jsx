import { loadIcon } from "../../composables/iconLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__center">
        <div className="footer__upper--wrapper">
          <div className="footer__companies">
            <img
              src={loadIcon["company1"]}
              alt="meta quotes"
              className="footer__companies--company-logo"
            />
            <img
              src={loadIcon["company2"]}
              alt="verisign"
              className="footer__companies--company-logo"
            />
            <img
              src={loadIcon["company3"]}
              alt="unicef champion for children"
              className="footer__companies--company-logo"
            />
            <img
              src={loadIcon["company4"]}
              alt="investors in people, gold until 2022"
              className="footer__companies--company-logo"
            />
          </div>
          <div className="footer__social--media">
            Follow us on
            <a href="#facebook" className="footer__social--media-link">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#twitter" className="footer__social--media-link">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#youtube" className="footer__social--media-link">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="#instagram" className="footer__social--media-link">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#linkedin" className="footer__social--media-link">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
        <div className="footer__lower--wrapper">
          <p className="footer__privacy--policy">
            <a href="#privacy-policy" className="footer__privacy--policy-link">
              Privacy Policy
            </a>{" "}
            <span>|</span>
            <a href="#cookie-policy" className="footer__privacy--policy-link">
              Cookie Policy
            </a>{" "}
            <span>|</span>
            <a
              href="#terms-and-conditions"
              className="footer__privacy--policy-link"
            >
              Terms and Conditions
            </a>
          </p>
          <img
            src={loadIcon["tradingPoint"]}
            alt="trading point"
            className="footer__logo"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
