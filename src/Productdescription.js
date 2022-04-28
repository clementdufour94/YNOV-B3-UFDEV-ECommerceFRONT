import React, { useState, useEffect } from 'react'
import './Productdescription.css'
import {useParams} from "react-router-dom"
import {useStateValue} from "./StateProvider"

function Productdescription() {
    const {productId} = useParams()
    const apiURL = `http://localhost:8000/product/${productId}`
    const [productData, setProductData] = useState({});
    useEffect(() => {
        getAPIProductWithFetch();
      }, []);
      
    const getAPIProductWithFetch = async () => {
        const response = await fetch(apiURL);
        const jsonData = await response.json();
        setProductData(jsonData);
        
    };
    const [{basket}, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                id:productData.id,
                title:productData.name,
                image:productData.photo,
                price:productData.price,
                rating:4,
            },

        })

    }
      
      
  return (
    <div className="container">
 
    
        <div className="left-column">
            
            <img className="active" src={productData.photo} alt=""></img>
        </div>
   
   
    
        <div className="right-column">
    
        
            <div className="product-description">
                <span>Headphones</span>
                <h3>{productData.name}</h3>
                <p>{productData.description}</p>
            </div>
    
        
            <div className="product-configuration">
    
        
            
    
        
                <div className="cable-config">
                    <span>Cable configuration</span>
            
                    <div className="cable-choose">
                        <button>Straight</button>
                        <button>Coiled</button>
                        <button>Long-coiled</button>
                    </div>
    
                    <a href="#">How to configurate your headphones</a>
                </div>
            </div>
    
        
            <div className="product-price">
                <span>{productData.price}$</span>
                <a href="#" className="cart-btn" onClick={addToBasket}>Add to cart</a>
            </div>
        </div>
  
    
    </div>
    
  )
}

export default Productdescription