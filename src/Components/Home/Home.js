import React, { useEffect, useState } from 'react';
import Users from '../Users/Users';
import './Home.css'

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data));
        
    }, [])
    return (
        <div>
          <div className="user-body">
          {
                users.map(user => <Users key={user.id} user={user} />)

            }
          </div>
        </div>
    );
};

export default Home;