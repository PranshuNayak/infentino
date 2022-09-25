import React from "react";
import UpperBorder from "../Border/UpperBorder";
import meditation from "../../resources/icons/117909-meditation-man.gif";
import "./style.css";
import {SteppedLineTo}  from "react-lineto";

function Services() {
  return (
    <div className="row outer my-5">
      <UpperBorder
        align="justify-content-center"
        textAlign="text-center"
        text1="Services we provide"
        text2="We serve the users in different categories with latest tools"
      />
      <div className="col-12 ">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 text-center h3 UI">UI/UX</div>
          <div className="col-6 text-center h3 CMS">CMS</div>
          <div className="col-6 text-center h3 SAAS">SaaS</div>
          <div className="col-4 flex-1">
            <div className="row WE">
              <div className="col-12 text-center h3 mb-5 WEB">Webistes</div>
              <div className="col-12 text-center h3 mt-5 MOB">Mobile Apps</div>
            </div>
          </div>
          <div className="col-4 image d-flex justify-content-center align-items-center IM">
            <div style={{zIndex:100}}><img src={meditation} alt="meditation" className="inner-image" /></div>
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col-12 text-center h3 mb-5 AI">AI/ML</div>
              <div className="col-12 text-center h3 mt-5 BL">Blockchain</div>
            </div>
          </div>

         <SteppedLineTo delay={1}  orientation="v" borderColor="black" to="IM" from="UI" />
         <SteppedLineTo delay={1}  orientation="v" borderColor="black" to="IM" from="CMS" />
         <SteppedLineTo delay={1}  orientation="v" borderColor="black" to="IM" from="SAAS" />
         <SteppedLineTo delay={1}  orientation="v" borderColor="black" to="IM" from="BL" />
         <SteppedLineTo delay={1}  orientation="v" borderColor="black" to="IM" from="AI" />
         <SteppedLineTo delay={1}  orientation="v" borderColor="black" to="IM" from="WEB" />
         <SteppedLineTo delay={1}  orientation="v" borderColor="black" to="IM" from="MOB" />
        </div>
      </div>
    </div>
  );
}

export default Services;
