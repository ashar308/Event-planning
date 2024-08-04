import React from 'react';
function Eventitms({image, name, price}){
    return(
        <div className="Eventitms">
            <div style={{ backgroundImage: `url(${image})` }}> </div>
            <h1>{name}</h1>
            <p>Price: {price}</p>
            
        </div> 
    );
    
    
    
    
}
export default Eventitms;