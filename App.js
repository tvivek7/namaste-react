import React from "react";
import ReactDOM from "react-dom/client";

const parent =
    React.createElement("div", { id: "parent" }, [
        React.createElement("div", { id: "child" },
            [React.createElement("h1", { id: "h1" }, "Hello from h178"), React.createElement("h2", { id: "h2" }, "Hello from h2")]),
        React.createElement("div", { id: "child2" },
            [React.createElement("h3", { id: "h4" }, "Hello from h3"), React.createElement("h4", { id: "h4" }, "Hello from h9")])]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);