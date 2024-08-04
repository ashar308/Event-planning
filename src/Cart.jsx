import React, {useState,useEffect} from 'react';
import CartItem from "./CartItem.jsx";
import './Cart.css';
function Cart({item}){
    const [itm,setItem] = useState(item);
    useEffect(()=> {
        window.localStorage.setItem('items',JSON.stringify(itm));
    },[itm])
    const updateqty = (id, newqty) =>{
        const nwitms = itm.map(item =>{
            if(item.id ===id){
                return {...item,qty:newqty}
            }
        else{
            return item;}
    });
        setItem(nwitms)
    }
    const grandTotal = itm.reduce((total,lstitm)=>(total+lstitm.qty*lstitm.price),0).toFixed(2);
    return(
        <div className="Cart">
            <h1 className='cartTitle'>Shopping Cart</h1>
            <div className='cart-items'>
               {itm.map(itembasket =>(
                   <CartItem key = {itembasket.id}updateqty={updateqty}{...itembasket}/>
                ))} 
            </div>
            <h2 className='cart-total'>Total: ${grandTotal}</h2>
            
        </div>
    )
    
}
export default Cart;