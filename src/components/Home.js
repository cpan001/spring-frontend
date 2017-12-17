import React from "react";
import SignupForm from "./Home/SignupForm";
import Footer from "./Home/Footer";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <div className="parallax">
          <div className="parallax-content">
            <div id="home-title">spring</div>
            <div id="home-main-tagline">
              Personalized fragrances designed for you
            </div>
            <div id="home-sub-tagline">sign up to join our launch</div>
            <SignupForm />
          </div>
        </div>
        <div className="home-content">
          <div className="content one">
            <h1>Natural</h1>
            <p>Free of toxins and GMOs</p>
          </div>
          <div className="content two">
            <h1>Personalized</h1>
            <p>
              Individually customized fragrance just for you based on our
              fragrance quiz
            </p>
          </div>
          <div className="content three">
            <h1>Free Delivery</h1>
            <p>
              Delivered straight to your door -- subscription & no subscription
              option available
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
