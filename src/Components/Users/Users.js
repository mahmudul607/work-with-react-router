import React from "react";
import { Link } from "react-router-dom";
import './Users.css'

const Users = (props) => {
 
    const {name, id} = props.user;
  
    return (
        <div className="user-card">
            
            <div>
            <h1>Name: {name}</h1>
            <p> User Id: {id}</p>
            </div>
            <div className="btn-box">
            <Link to={`/Person/${id}`}><button className="main-btn">See More</button></Link>
            </div>
            
            
            
        </div>
    );
};

export default Users;