// const heading = React.createElement("h1",{id:"heading",xyz:"abc"},"Heading from React");
// console.log(heading)//object
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);// render mehtod will create h1 tag

import React from "react";
import ReactDOM from "react-dom";

/*
 Header
 - Logo
 - Nav Items
Body
- Search
- Restaurant Container
    - Restaurant Card- Dish Name- Image- Restaurant Name- Rating- Cuisines- Time to Deliver
 Footer
 - Copyright
 - Links
 - Address
 - Contact 
*/

const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img
                 className="logo"
                 src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>

            </div>

        </div>
    )
}
const RestarantCard=()=>{
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmLOy9JTZ7wPrUeaQm3TIyYKhMz1evbsMKtrIxjCB3-wtHLdBRf_phD2HAdA&s"/>
            <h3>Meghana Foods</h3>
            <h4>Asian , Biryani, North indian</h4>
            <h4>4.4 Stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}
const Body=()=>{
    return(
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestarantCard/>
                <RestarantCard/>
                <RestarantCard/>
                <RestarantCard/>
                <RestarantCard/>
                <RestarantCard/>
                <RestarantCard/>
                <RestarantCard/>

            </div>

        </div>
    )
}
const AppLayout=()=>{
    return <div className="app">
       <Header/>
       <Body/>
    </div>
}

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>);