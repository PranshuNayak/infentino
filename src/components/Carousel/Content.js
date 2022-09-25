import React from "react";

function Content({content}) {
  const style = {
    height: "4.03px",
    backgroundColor: "#F050BE"
  };
  return (
    <div className="col-lg-3   d-lg-flex d-none justify-content-center align-items-center">
        <div className="row">
            <div className="col-12 text-center">{content}</div>
            <div className="col-12" style={style} />
        </div>
    </div>
  );
}

export default Content;
