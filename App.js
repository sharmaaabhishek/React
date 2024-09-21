// For creating elemnts and rendering using DOM

// const myHeading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Helllo world from reactjs !"
// );

// console.log(myHeading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(myHeading);

// For creating nested html elements

// const parent = React.createElement(
//   "div",
//   { id: "firstDiv" },
//   React.createElement(
//     "div",
//     { className: "secondClass" },
//     // React.createElement("h1", { id: "heading" }, "Hello ! i am h1 tag")
//     //For sibling element
//     [
//       React.createElement("h1", { id: "heading" }, "Hello ! i am h1 tag"),
//       React.createElement("h2", { id: "heading" }, "Hello ! i am h2 tag"),
//     ]
//   )
// );

const parent = React.createElement("div", { id: "firstDiv" }, [
  React.createElement("div", { className: "secondClass" }, [
    React.createElement("h1", { id: "heading" }, "Hello ! i am h1 tag"),
    React.createElement("h2", { id: "heading" }, "Hello ! i am h2 tag"),
  ]),
  React.createElement("div", { className: "thirdClass" }, [
    React.createElement("h1", { id: "heading" }, "Hello ! i am h1 tag"),
    React.createElement("h2", { id: "heading" }, "Hello ! i am h2 tag"),
  ]),
]);

// Thats why JSX is introduced to the chapter

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
