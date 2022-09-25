import React from "react";
import applicationStack from "../../resources/icons/stacks.svg";
import webisteStack from "../../resources/icons/stakcs2.svg";
import database from "../../resources/icons/database.svg";
import artificial from "../../resources/icons/ai.svg";
import etherium from "../../resources/icons/ehterium.svg";
import StackCard from "./StackCard";
import UpperBorder from "../Border/UpperBorder";
import VerticalStack from "./Vetical Stack/VerticalStack";

function Stacks() {
  const Stacks = [
    {
      icon: applicationStack,
      title: "application stack",
      borderColor: "#ED4B9E",
      text: "We develop android & iOS apps which can increase customer engagement and generate maximum ROI with maximum lead conversions.",
    },
    {
      icon: webisteStack,
      title: "website stack",
      borderColor: "#4B4DED",
      text: "Get extensively researched website and web app development services using the latest technologies like MEAN, MERN, Laravel, BootStrap, and much more.",
    },
    {
      icon: database,
      title: "database stack",
      borderColor: "#31D0AA",
      text: "We have a set of technologies and services that organizations use to store, manage, and access data.",
    },
    {
      icon: artificial,
      title: "AI/ML stacks",
      borderColor: "#F4C751",
      text: "We provide features to larger organizations which have already started maturing their processes to create standardized ML pipelines that are optimized for scale, efficiency, and control.",
    },
    {
      icon: etherium,
      title: "blockchain",
      borderColor: "#FF3131",
      text: "We use Blockstack, a project that utilizes blockchain technology to expand the functionalities of bitcoin by serving as a second layer protocol.",
    },
    {
      icon: applicationStack,
      title: "gaming stack",
      borderColor: "#ED4B9E",
      text: "Gaming services serve customers in gambling establishments, such as casinos or racetracks. Some workers tend slot machines or deal cards.",
    },
  ];
  return (
    <div className="row justify-content-between align-items-center mt-5 px-5">
      <UpperBorder
      align="justify-content-left"
      textAlign="text-left"
      text1="See popular tags"
      text2="and browse different topics"
      />
      <div className="col-xl-5 col-12">
        <VerticalStack/>
      </div>
      <div className="col-xl-5 col-12">
        <div className="row">
          {Stacks.map((stack, index) => (
            <StackCard stack={stack} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stacks;
