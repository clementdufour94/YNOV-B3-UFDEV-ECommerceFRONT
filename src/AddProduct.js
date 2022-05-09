import React, { useState, useEffect } from "react";
import "./AddProduct.css";
import Select from "react-select";

function AddProduct() {
  const [postId, setPostId] = useState(null);
   
  
  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
      
        name: "React Hooks POST Request Example",
        description: "test",
        photo: "photo",
    
        price: 5,
        quantity: 0
      }),
    };
    
    fetch("http://localhost:8000/product/create", requestOptions)
      .then((response) => response.json())
      .then((data) => setPostId(data.id));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const [display, setDisplay] = useState(true);
  const [display2, setDisplay2] = useState(false)

  const handleCategory = () => {
    
          setDisplay(false)
          setDisplay2(true)

    console.log(display);
  };
  const handleCategory2 = () => {
    
    setDisplay(true)
    setDisplay2(false)

console.log(display);
};
  

  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1> Add Product</h1>
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Title</h3>
          </div>
          <div className='payment__address'>
            <input type='text' placeholder='Enter name of product'></input>
          </div>
        </div>
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Description</h3>
          </div>
          <div className='payment__items'>
            <textarea cols='100' rows='3'></textarea>
          </div>
        </div>
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Photo</h3>
          </div>
          <div className='payment__details'>
            <form>
              <div className='payment__priceContainer'>
                <input type='file'></input>
              </div>
            </form>
          </div>
        </div>
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Price</h3>
          </div>
          <div className='payment__details'>
            <form>
              <div className='payment__priceContainer'>
                <input type='float' placeholder='Enter price'></input>
              </div>
            </form>
          </div>
        </div>

        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Category</h3>
          </div>
          <div className='payment__details'>
            <div
              className='payment__priceContainer'
              style={{ display: display ? "block" : "none" }}
            >
                <div className='payment__input__category'><Select options={options} name='option' /></div>
              
              <button className='addproduct-btn' onClick={handleCategory}>
                New category
              </button>
              
            </div>
            <div
              className='payment__priceContainer'
              style={{ display: display2 ? "block" : "none" }}
            >
                <div className='payment__input__category'><input type="text" placeholder="New category name"></input></div>
              <button className='addproduct-btn' onClick={handleCategory2}>
                View Category
            </button>
              
            </div>
            
          </div>
        </div>
      </div>
      <div className='test'>
        <button className='addproduct-btn'>Add Product</button>
      </div>
    </div>
  );
}

export default AddProduct;
