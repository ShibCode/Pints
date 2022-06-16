import React from "react";
import hand from "../../Assets/hand.png";
import "./ThankYou.css";

export default function ThankYou() {
  return (
    <div className="thank-you">
      <img src={hand} alt="hand" />
      <h1 className="heading poppins thank-you-heading">Thank you</h1>
      <p className="para montserrat thank-you-para">
        We thank you very much for your interest, you will receive an email in a
        short while, and do follow up closely, you never know when the surprise
        will arrive 👀
      </p>
    </div>
  );
}
