// const heading = React.createElement("h1",{id:"heading",xyz:"abc"},"Heading from React");
// console.log(heading)//object
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);// render mehtod will create h1 tag

import React from "react";
import ReactDOM from "react-dom";

const parent=React.createElement
("div",
    {id:"parent"}
    ,React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"i am h2 tag"),]

))
 console.log(parent)//object
 const root=ReactDOM.createRoot(document.getElementById("root"));
 root.render(parent);// render mehtod will create h1 tag
