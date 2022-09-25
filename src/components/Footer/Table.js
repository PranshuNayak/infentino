import React from "react";

function Table({ data }) {
  const style = {
    color:"white",
    textTransform:"capitalize"
  }
  return (
    <div className="col-md-3 col-sm-4 col-12" >
        <table class="table table-borderless">
      <thead>
        <tr>
          <th scope="col" style={style}>{data.heading}</th>
        </tr>
      </thead>
      <tbody>
        {data.items.map((item,index) => (
          <tr key={index}>
            <td style={style} >{item}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default Table;
