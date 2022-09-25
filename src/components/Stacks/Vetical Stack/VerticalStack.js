import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import VerticalStackElement from "./VerticalStackElement";
import fire from '../../../resources/icons/fire.svg'

function VerticalStack() {
    const stacks = ["AI/ML","Node","Database","MySQL","React"]
  return <VerticalTimeline lineColor={"#F050BE"} className="row">
    <div className="col-12">
        <div className="row justify-content-center align-items-center p-1" style={{border:"1px solid #F050BE"}}>
            <div className="col-1">
                <img src={fire} alt="fire" />
            </div>
            <div className="col-5 text-capitalize h4">Different topics</div>
        </div>
    </div>
    {

        stacks.map((stack,index)=>(
            <VerticalStackElement key={index} title={stack}  />
        ))
    }
  </VerticalTimeline>;
}

export default VerticalStack;
