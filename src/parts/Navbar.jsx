import React,{useState} from 'react'; // Use lowercase 'react' for the import
import loggo from "../assets/eventloggo.jpeg";
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'
import {Link} from 'react-router-dom';

function Navbar() {
    const [hidlinks, hidlinksmthd] = useState(false);
    const toggleNavbar = () => {
        hidlinksmthd(!hidlinks);
    };

    return (
        <div className="nav-bar">
            <div className="firsthalf" id={hidlinks ? "open" : "close"}>
                <img src={loggo} alt="Logo" />
                <div className="hiddenLinks">
                    {/* Add your hidden links here */}
                    <Link to="/">Home</Link>
                    <Link to="/events">Events</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
            <div className="second-half">
                {/* Add the rest of your links here */}
                <Link to="/">Home</Link>
                <Link to="/events">Events</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
        );
}

export default Navbar;


 // Remove the parentheses after 'Navbar'
