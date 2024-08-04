import React from 'react';
import Eventitms from "./Eventitms.jsx";
import {Eventlst} from "../helper/Eventlst.jsx";
import "../styles/Event.css";
function Events(){
    return(
        <div className="event">
            <h1 className ="title">Planned events</h1>
        
        <div className="evenlst">
            {Eventlst.map((eventitms, key) => {
                return (
                    <Eventitms
                        key={key}
                        image={eventitms.image}
                        name={eventitms.name}
                        price={eventitms.price}
                    />
                    );
            })}
        </div>
        </div>
        
    );
}
export default Events;