import { useState } from "react";

const User=(props)=>{
    const [count]=useState(0);
    const [count2]=useState(2);
    return <div class="user-card">
        <h1>{count}</h1>
        <h1>{count2}</h1>
        <h2>Name:{props.name}</h2>
        <h3>Location:Bhimavaram</h3>
        <h4>9393678787</h4>

    </div>
}

export default User;