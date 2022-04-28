import React from 'react'
import "./Product.css"
import {useStateValue} from "./StateProvider"
import {useHistory} from "react-router-dom"


function Product({id, title, image,price,rating}) {
    const history = useHistory();
    
    
    
    

    const [{basket}, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },

        })

    }
   
    
    
    
    
    
   
  return (

    
      
        <div className="product">
            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            
                
            </div>
            <img src={image}
            alt=""></img>
            
            <a href="#" className="cart-btn" onClick={e=> history.push(`/product/${id}`)} >View Description</a>
            <div className="product__rating">
                    {Array(rating).fill()
                    .map((_, i) =>(
                        <p>⭐</p>

                    ))}
                    
                </div>

        </div>

    
    
  )
}

export default Product