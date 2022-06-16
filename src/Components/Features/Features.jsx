import React from "react";
import eye from "../../Assets/eye.png";
import moneyWings from "../../Assets/money-wings.png";
import partyEmoji from "../../Assets/party-emoji.png";
import muscle from "../../Assets/muscle.png";
import "./Features.css";

export default function Features() {
  return (
    <div className="features">
      <div className="features-content">
        <h1 className="features-heading heading poppins">
          We are more than you ever expected.
        </h1>
        <div className="features-list">
          <div className="feature">
            <div className="feature-top">
              <img
                src={moneyWings}
                alt="flying money"
                className="feature-img"
              />
            </div>
            <div className="feature-bottom">
              <h4 className="feature-heading heading poppins">Simple</h4>
              <div className="feature-para-div">
                <p className="feature-para montserrat">
                  No jargons, no magic, no spells.
                </p>
                <p className="feature-para montserrat">
                  Just the features you need to start investing.
                </p>
              </div>
            </div>
          </div>
          <div className="feature">
            <div className="feature-top">
              <img src={eye} alt="flying money" className="feature-img" />
            </div>
            <div className="feature-bottom">
              <h4 className="feature-heading heading poppins">Smart</h4>
              <div className="feature-para-div">
                <p className="feature-para montserrat">
                  Personalised stocks and portfolio recommendations.
                </p>
              </div>
            </div>
          </div>
          <div className="feature">
            <div className="feature-top">
              <img src={muscle} alt="flying money" className="feature-img" />
            </div>
            <div className="feature-bottom">
              <h4 className="feature-heading heading poppins">Control</h4>
              <div className="feature-para-div">
                <p className="feature-para montserrat">
                  Step on the peddle or go autopilot - take control of your
                  money.
                </p>
              </div>
            </div>
          </div>
          <div className="feature">
            <div className="feature-top">
              <img
                src={partyEmoji}
                alt="flying money"
                className="feature-img"
              />
            </div>
            <div className="feature-bottom">
              <h4 className="feature-heading heading poppins">Fun</h4>
              <div className="feature-para-div">
                <p className="feature-para montserrat">
                  Whoever said investing has to be a chore!
                </p>
                <p className="feature-para montserrat">
                  Go social, have fun, learn investing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
