import React from "react";
import ReactDOM from "react-dom/client"
// const header = React.createElement("h1",{id:"heading"},"Hello world from react")
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(header)
// JSX => JavaScript XML
// JSX is a **JavaScript syntax extension** that looks like HTML.
// It is not HTML, but gets compiled into JavaScript (`React.createElement`) for rendering UI.
const heading = React.createElement("span", { id: "heading1" }, "Normal React Element"); // js object not  a  html element 
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); // convert js  object into html
// another way writing these is jsx use () for mutiple line
const jsxHeading = (<h1>
  {heading}
  Hi am jsxHeading</h1>)
root.render(jsxHeading) // injceting reactelement and jsx 
//Every thing in react basically a component there is two types on that 
// class based component  => old
// functional component => new 
// functional compoent => it is normal js function that return the mutiple jsx elemnt or react element 
// use can use normal function and arroe function 
// sample way create of functional component
// first letter of component should be capital
const Title = function () {
  return <h1 id="title">This is Title Component</h1>
}
const HeaderComponent = () => {
  return (
    <div id="header">
      {heading}
      <Title />
      {Title()}
      {30+20}
      <Title></Title>
      <h2>This is Header Component</h2>
      <h3>This is Header Component</h3>
      <FooterComponent />
    </div>
  )
}
// component can call another component
const FooterComponent = () => {
  return <h1>This is Footer Component</h1>
}
root.render(<HeaderComponent />) // calling component in jsx
//babel tranform jsx into react element render
// react element => object => html (DOM)
// babel is a js compiler that convert jsx into react element

