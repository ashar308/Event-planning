import React from 'react';
import './CartItem.css'
function CartItem({id, name, price,qty,updateqty}){
    const addOne= ()=>{
        updateqty(id,qty+1)
    }
    const subtOne = ()=>{
        updateqty(id,qty-1)
    }
    return (
        <div className = 'items'>

            
            <div>{name}</div>

            <div>${price}</div>

            <div>
                <button onClick={subtOne} disabled={qty<=1}>-</button>
                {qty}
                <button onClick={addOne}>+</button>
            </div>
            <div>Total: ${qty*price}</div>
            
        </div>
    )
}
export default CartItem;