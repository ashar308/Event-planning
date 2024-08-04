import React from 'react';
import contact from "../assets/contact.jpeg";
import "../styles/Contact.css";
function Contact(){
    return(
        <div className="cont">
            <div className="lft" style={{ backgroundImage: `url(${contact})` }}></div>
        <div className="rght">
            <h1>Contact Us</h1>
            <form id="contact-form" method="POST">
                <label>Please Provide the following information</label>
                <label htmlFor="name">Full Name</label>
                <input name='name' placeholder="Enter your full Name here" type="text" />
                <label htmlFor="email">Email</label>
                <input name='email' placeholder="Enter your email here" type="email" />
                <label htmlFor="feedback">Concerns!</label>
                <textarea rows="5" placeholder="Enter Feedback" name="feedback" required></textarea>
                <button type="submit">Submit!</button>
                
                
                
                
            </form>
        </div>
        </div>
    );
}
export default Contact;