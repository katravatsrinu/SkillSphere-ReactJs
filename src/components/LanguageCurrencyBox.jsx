import React from "react";
import "./LanguageCurrencyBox.css";

const LanguageCurrencyBox = ({ onSelectLanguage, closeBox }) => {
  return (
    <div className="language-currency-box">
      <button className="close-button" onClick={closeBox}>
        Close
      </button>
      <h3>Select Language and Currency</h3>
      <div className="options">
        <div className="languages">
          <h4>Languages</h4>
          <ul>
            <li onClick={() => onSelectLanguage("English")}>English</li>
            <li onClick={() => onSelectLanguage("Spanish")}>Spanish</li>
            <li onClick={() => onSelectLanguage("French")}>French</li>
            <li onClick={() => onSelectLanguage("German")}>German</li>
            <li onClick={() => onSelectLanguage("Chinese")}>Chinese</li>
          </ul>
        </div>
        <div className="currencies">
          <h4>Currencies</h4>
          <ul>
            <li>USD</li>
            <li>EUR</li>
            <li>GBP</li>
            <li>JPY</li>
            <li>INR</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LanguageCurrencyBox;
