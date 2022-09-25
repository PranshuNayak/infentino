import React from "react";
import designing from "../../resources/icons/designing.svg";
import development from "../../resources/icons/development.svg";
import production from "../../resources/icons/production.svg";
import query from "../../resources/icons/query.svg";
import UpperBorder from "../Border/UpperBorder";
import FeatureCard from "./FeatureCard";
import verified from "../../resources/icons/9554694_store_verified_shopping_ecommerce_cart_icon (1) 2.svg";
import "./style.css";
function Features() {
  const features = [
    { icon: query, text: "query sent" },
    { icon: designing, text: "designing" },
    { icon: development, text: "development" },
    { icon: production, text: "production" },
  ];
  return (
    <div className="row jusitfy-content-between align-items-center mt-5 px-5">
      <UpperBorder
        align="justify-content-left"
        textAlign="text-left"
        text1={`Let's see`}
        text2="how it works"
      />
      {features.map((feature, index) => (
        <FeatureCard feature={feature} key={index} />
      ))}
      <div className="col-12 px-4 mt-5">
        <div className="row">
          <div className="col-md-4 col-sm-5 col-12 h1 d-flex align-items-center px-2">
            What you get besides the above things
          </div>
          <div className="col-md-4 col-sm-5 col-12 d-flex align-items-center ">
            <div className="row justify-content-center align-items-center w-100">
              <div className="col-4  ">
                <img src={verified} alt="verified" />
              </div>
              <div className="col-4 col-8 h2">24 x 7</div>
            </div>
          </div>
          <div className="col-md-4 image-feature" />
        </div>
      </div>
    </div>
  );
}

export default Features;
