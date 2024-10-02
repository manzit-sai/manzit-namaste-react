import RestarantCard from "./RestaurantCard"
import { resList } from "../utils/mockData"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
const Body=()=>{
    const[listOfRestaurant,setListOfRestaurant]=useState([])
    const [filteredRestaurant,setFilteredRestaurant]=useState([])
    const [searchText,setSearchText]=useState("")
    
    useEffect(()=>{
        fetchData()
    },[])
   
    const fetchData=async()=>{
              const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
              const json=await data.json();
              console.log(json);
              setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements.infoWithStyle.restaurants)
              setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements.infoWithStyle.restaurants)
    }
    if(listOfRestaurant.length===0){
        return <Shimmer/>
    }
    return(
        <div className="body">
         
            
            <div className="filter">
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value)
                }}/>
                <button onClick={()=>{
                    const filteredRestaurant=listOfRestaurant.filter((res)=>
                    res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setFilteredRestaurant(filteredRestaurant);

                }}>Button</button>
                
            </div>
                <button className="filter-btn" onClick={()=>{
                    const filteredList=listOfRestaurant.filter((res)=>res.info.avgRating>4);
                    setListOfRestaurant(filteredList);
                }}>
                    Top Rated Restaurants
                </button>

            </div>
            <div className="res-container">
      
                {filteredRestaurant.map((restaurant)=>(
                    
                   <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>  <RestarantCard key={restaurant.info.id} resData={restaurant}/></Link> 
                
                ))}             
           

            </div>

        </div>
    )
}
export default Body