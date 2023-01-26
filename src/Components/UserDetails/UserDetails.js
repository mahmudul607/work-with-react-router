import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './UsersDetails.css'

const UserDetails = () => {
    const {PersonId} = useParams();
    const [person, setPerson] = useState({})

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${PersonId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPerson(data));
    },[])}


console.log(person);




    return (
        <div className='user-details'>
            <h1>Details of {person.name}</h1>
            <h2>Id: {PersonId}</h2>
            <h3>Phone: {person.phone}</h3>
            <h3>User Name: {person.username}</h3>
            <h3>WebSite: {person.website}</h3>
            <Link to={`/home`}><button className='main-btn'>Back</button></Link>
            
            
        </div>
    );
};

export default UserDetails;