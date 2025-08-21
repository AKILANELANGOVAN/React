import React from "react";
import ReactDOM from "react-dom/client"
// const header = React.createElement("h1",{id:"heading"},"Hello world from react")
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(header)

// create an structure  following 

{/* <div id="parent">
<div id="child1">
  <h1>Im H1 from Child1</h1>
   <h2>Im H2 from Child1</h2>
</div>
<div id="child2">
  <h1>Im H1 from Child2</h1>
   <h2>Im H2 from Child2</h2>
</div> 
</div> */} 

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
      "div",
      { id: "child1" },
      [
        React.createElement("h1", {}, "Hi from H1 child1"),
        React.createElement("h2", {}, "Hi from H2 child1")
      ]
    )
  ],
  [
    React.createElement(
      "div",
      { id: "child2" },
      [
        React.createElement("h1", {}, "Hi from H1 child2"),
        React.createElement("h2", {}, "Hi from H2 child2")
      ]
    )
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)
