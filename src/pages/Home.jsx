import React from 'react';
import { Link } from 'react-router-dom';
import bgimg from '../assets/event.jpeg';
import '../styles/Home.css'
function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${bgimg})` }}>
            <div className="headerContainer">
                <h1>Ash Events</h1>
                <p>Register for your favorite event</p>
                <Link to="/events">
                    <button>Register Now</button>
                </Link>
            </div>
           
        </div>
        );
}

export default Home;
