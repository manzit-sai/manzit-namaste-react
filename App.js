// const heading = React.createElement("h1",{id:"heading",xyz:"abc"},"Heading from React");
// console.log(heading)//object
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);// render mehtod will create h1 tag

import React from "react";
import ReactDOM from "react-dom";

//React.createElement => Object => HTML Element(render)

//JSX=>React.createElement=>ReactElement-Js object => HTML Element (render)
//JSX -HTML like or XML like syntax
//React Element 
const Title =()=>(
<h1 className="head" tabIndex="2">Namaste React by JSX</h1>
)

const number =10000;
//Functional Component
//Component name should be in pascal case
const HeadingComponent=()=>(
    <div>
        <Title/>
        {number}
       <h1>Namaste React Functional Component</h1>
    </div>
     
)
const HeadingComponent2=()=>(
     <h1>Namaste React Functional Component</h1>
)
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent/>);


