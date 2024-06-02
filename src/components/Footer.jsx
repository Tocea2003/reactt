import React from "react";
import { FaFacebook, FaInstagram, FaMap } from "react-icons/fa"; // Added missing import for FaFacebook and FaInstagram
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h2>Smart Camps </h2>
      <p>nr. 244 557123 Hasag</p>
      <p>
        Email:
        <a href="mailto:inscrieri.smartcamps@gmail.com">
          inscrieri.smartcamps@gmail.com
        </a>
      </p>
      <p>
        Phone:
        <a href="tel:0740395422">0740 395 422</a>
      </p>
      <p>
        <a href="https://www.csac.ro" target="_blank" rel="noopener noreferrer">
          www.csac.ro
        </a>
      </p>
      <p>
        <a
          href="https://scanstart.ro"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.scanstart.ro
        </a>
      </p>
      <p>
        <a
          href="https://graffino.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.graffino.com
        </a>
      </p>
      <div>
        <a
          href="https://www.facebook.com/profile.php?id=100077758720707&locale=ro_RO"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://www.instagram.com/explore/locations/108933348366205/smart-camps/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} />
        </a>
        <button
          onClick={() =>
            window.open(
              "https://www.google.com/maps/search/nr.+244+Hasag/@45.977654,24.0776861,16z/data=!3m1!4b1?entry=ttu",
              "_blank"
            )
          }
        >
          <FaMap size={24} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
