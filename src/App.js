// const heading = React.createElement("h1",{id:"heading",xyz:"abc"},"Heading from React");
// console.log(heading)//object
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);// render mehtod will create h1 tag

import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";


const AppLayout=()=>{
    return <div className="app">
       <Header/>
       <Outlet/>
    </div>
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
           
            {
                path:"/about",
                element:<About/>
            },
            {
               path:"/contact",
               element:<Contact/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>,
            }
        ],
        errorElement:<Error/>

    },
    
])
const root=ReactDOM.createRoot(document.getElementById("root"))
//root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter}/>)