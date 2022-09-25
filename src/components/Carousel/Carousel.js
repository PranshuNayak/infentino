import React from "react";
import UpperBorder from "../Border/UpperBorder";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Content from "./Content";
import assets1 from "../../resources/images/unsplash_5U_28ojjgms.png";
import assets2 from "../../resources/images/unsplash_IyaNci0CyRk.png";
import assets3 from "../../resources/images/unsplash_NTyBbu66_SI.png";
import assets4 from "../../resources/images/unsplash_xG8IQMqMITM.png";
import assets5 from "../../resources/images/unsplash_Ylk5n_nd9dA.png";
function CarouselComponent() {
  const style = {
    outer: {
      background: " #FFE5F7",
      borderRadius: "50px",
    },
    image: {
      width: "100%",
      height: "300px",
      borderRadius:"40px"
    },
  };
  const data = [
    {
      image: assets1,
      content: `About Infenito,
    insights about us`,
    },
    {
      image: assets2,
      content: `See our latest blogs
    about stacks`,
    },
    {
      image: assets3,
      content: `See our latest blogs
    about stacks`,
    },
    {
      image: assets4,
      content: `See our latest blogs
    about stacks`,
    },
    {
      image: assets5,
      content: `See our latest blogs
    about stacks`,
    },
  ];
  return (
    <div className="row justify-content-center align-items-center my-5" >
      <div className="col-10 p-5" style={style.outer}>
        <div className="row">
        <UpperBorder
        align="justify-content-center"
        textAlign="text-center"
        text1="Still have a doubt?"
      />
      <p className="col-12 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ex.</p>
      <div className="col-12 mt-5">
        <Carousel centerMode centerSlidePercentage={40}>
          {data.map((data, index) => (
            <div className="row mx-2" key={index}>
              <div className="col-lg-9 col-12">
                <img style={style.image} src={data.image} alt={data.image} />
              </div>
              <Content content={data.content} />
            </div>
          ))}
        </Carousel>
      </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselComponent;
