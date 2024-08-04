import React from 'React';
import fun from "../assets/Fun.jpeg";
import '../styles/About.css';
function About(){
    return(
        <div className="about">
            <div className="abttop"   style={{ backgroundImage: `url(${fun})` }}></div>
            <div className="abtbtm">
                <h1>About us</h1>
                <p>This website is made by the vision for you to choose your faviorate event and be part of it. The website provides a lot of different events that are diverse. The main person for that is to provide enjoyement while respecting culture and giving exposure to other people into a totally different culture. Your main priority has always been to provide a sense of belonging and community to everyone around us. We love to see you happy and we are so proud that we are opening our 7 pranch in the United States of America. Our mission statement is simple we believe in providing a cohesive and fun experience that provides community building. We are always on a lookout to do and see things that might excite you. Our team is made of diverse group of individual and they take su </p>
            </div>
            
        </div>
    );
}
export default About;