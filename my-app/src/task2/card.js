import React from "react";

export const Card = ({ data }) => {
  return (
    // <div className=" classy ">
    <div className="container color pb-2  ">
      <div className="row ">
        <div className="card-align d-flex ">
          {data.map((list) => (
            <div
              // key={list.id}
              style={{ background: list.color }}
              className=" card-top  "
            >
              <div className="pony">
                <icon className="round "> {list.icons} </icon>
              </div>

              <div className="card-body carden text-center ">
                {" "}
                <h1> {list.name}</h1>
                <p className="text-center ">{list.description}</p>
                <button className="btn btn-light btn-">{list.button}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Card;
