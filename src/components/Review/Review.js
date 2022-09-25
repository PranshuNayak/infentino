import React from "react";
import person from "../../resources/images/Rectangle 9480.svg";
function Review() {
  const style = {
    background: "#31D0AA",
    borderRadius: "90px 90px 0px 90px",
  };
  return (
    <div className="row vw-100 my-5 p-5 justify-content-center align-items-center">
      <div className="col-md-5 col-12 h1">What our Client’s say about us ?</div>
      <div className="col-md-5 col-12">
        <div
          className="row p-4 justify-content-center align-items-center text-light"
          style={style}
        >
          <div className="col-12">
            Look no further. These guys are great to work with! VERY GOOD
            COMPANY & GREAT TEAM SPIRIT! , strongly recommend them.
          </div>
          <div className="col-12 text-capitalize">david</div>
          <div className="col-12">Jr. Manager at SUBROS, India</div>
        </div>
      </div>
      <div className="col-md-2 align-self-end d-md-block d-none ">
        <img src={person} alt="person" />
      </div>
    </div>
  );
}

export default Review;
