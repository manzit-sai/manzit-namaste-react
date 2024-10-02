import { useEffect, useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";
const Header=()=>{
    const [btnNameReact,setBtnNameReact]=useState("Login");

    //if no dependency arrray => useeffect is called on every render
    //if dependency array empty=[] =>useeffect is called on initial render (just once)
    //if i put something in dependency array --use effect is called if that dependecy updates
    useEffect(()=>{
        console.log("use Effect called")
    },[])
    return(
        <div className="header">
            <div className="logo-container">
                <img
                 className="logo"
                 src={LOGO_URL}
        
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>
                        <Link to="/about">About Us</Link>
                        </li>
                    <li>
                        <Link to="/Contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login"monClick={()=>{
                       btnNameReact==="Login"? setBtnNameReact("Logout"):setBtnNameReact("Login")
                    }}>Login</button>
                </ul>

            </div>

        </div>
    )
}
export default Header