import { useEffect, useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStaus from "../utils/useOnlineStatus";
const Header=()=>{
    const [btnNameReact,setBtnNameReact]=useState("Login");

    //if no dependency arrray => useeffect is called on every render
    //if dependency array empty=[] =>useeffect is called on initial render (just once)
    //if i put something in dependency array --use effect is called if that dependecy updates
    useEffect(()=>{
        console.log("use Effect called")
    },[])

    const onlineStatus=useOnlineStaus();
    return(
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="logo-container">
                <img
                 className="w-56"
                 src={LOGO_URL}
        
                />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 ">
                    <li className="px-4">onlineStatus: {onlineStatus==true ? "✅" : "❌"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                        </li>
                    <li className="px-4">
                        <Link to="/Contact">Contact Us</Link></li>
                        <li>
                        <Link to="/Grocery">Grocery</Link></li>
                    <li className="px-4">Cart</li>
                    <button className="login"monClick={()=>{
                       btnNameReact==="Login"? setBtnNameReact("Logout"):setBtnNameReact("Login")
                    }}>Login</button>
                </ul>

            </div>

        </div>
    )
}
export default Header