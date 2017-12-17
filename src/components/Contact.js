import React from "react";
import Navbar from "./Navbar";

export default class Contact extends React.Component {
  render() {
    return (
      <div className="top-container">
        <div className="top-nav-bar">
          <Navbar />
        </div>
        <div className="policy-container">
          <h1>Contact Us</h1>
          <p>
            We'd love to hear from you if you have any questions or if you'd
            just like to say hello!
          </p>
          <p>
            <a href="mailto:springfragrancesapp@gmail.com">
              springfragrancesapp@gmail.com
            </a>{" "}
          </p>
        </div>
      </div>
    );
  }
}
