import React from 'react'
import './CheckoutProduct.css'
import {useStateValue} from "./StateProvider"

function CheckoutProduct({id, image,title,price,rating}) {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () =>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:id,
        })

    }
  return (
    <div className="checkoutProduct">
        <img src={image} alt="" className="checkoutProduct__image"></img>

        <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
            <p className="checkoutProduct__price"><small>€</small><strong>{price}</strong></p>
            <div className="checkoutProduct__rating">
                {Array(rating)
                .fill()
                .map((_, i) =>(
                    <p>⭐</p>
                ))} 

            </div>
            
            <a href="#" onClick={removeFromBasket} className="cart-btn">Remove from basket</a>

        </div>


    </div>
  )
}

export default CheckoutProduct