import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state={
            count:1,
            count1:3
        }
    }
    render(){
        const{count,count1}=this.state
        return(
            <div className="user-card">
                <h1>Class Componenet</h1>
                <h2>{count}</h2>
                <h2>{count1}</h2>
                <h2>Name : {this.props.name}</h2>
                <h3>Location:Bangalore</h3>
                <h4>number : 979006923</h4>
            </div>
        )
    }
}

export default UserClass;