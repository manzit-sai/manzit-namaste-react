// const heading = React.createElement("h1",{id:"heading",xyz:"abc"},"Heading from React");
// console.log(heading)//object
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);// render mehtod will create h1 tag

import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";




const AppLayout=()=>{
    return <div className="app">
       <Header/>
       <Body/>
    </div>
}

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>);