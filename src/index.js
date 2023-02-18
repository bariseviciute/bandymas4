//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";
const fname = "Rutos";
const lname = "Bariseviciutes";
const number = 8;
ReactDOM.render(
  <div>
    <h1>
      {" "}
      {fname} {lname} List arba {fname + " " + lname} arba {`${fname} ${lname}`}
    </h1>
    <p>
      {" "}
      Your lucky number is {number} and I will play {3 + 9} and{" "}
      {Math.floor(Math.random() * 20)}.
    </p>
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>
  </div>,
  document.getElementById("root")
);

//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
const firstname = "Rutyte";
const lastname = "Baryte";
const currentDate = new Date();
const year = currentDate.getFullYear();
ReactDOM.render(
  <div>
    <p>Created by {firstname + " " + lastname}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
