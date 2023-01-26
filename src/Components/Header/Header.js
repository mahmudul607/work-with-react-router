import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/details">Users</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/blog">Blogs</a></li>
            </ul>
        </nav>
    );
};

export default Header;