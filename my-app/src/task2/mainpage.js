import React from "react";

import "./mainpage.css";

export const Mainpage = () => {
  return (
    <div className="can">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6">
            <img
              className="w-100"
              alt=""
              src=" https://images01.nicepage.com/07/bd/07bdcaf28bfd9b8c0cd4bb0e998b41de.png"
            />
          </div>

          <div className="col-6 desc ">
            <h4 classname="text-start">ABOUT US</h4>
            <h1 className=" weight text-start ">
              Plan. Perform.
              <br />
              Inspire.
            </h1>

            <p className="text-start txty1">
              Our Company is a relationship-based company, meaning that we focus
              <br />
              on developing and maintaining long-term relationships with all of
              our
              <br />
              business partners.{" "}
            </p>

            <button className=" text-start button text-center">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
