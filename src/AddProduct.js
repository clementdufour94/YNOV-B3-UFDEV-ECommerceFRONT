import React, { useState, useEffect } from "react";
import "./AddProduct.css";
import Select from "react-select";

function AddProduct() {
  const [postId, setPostId] = useState(null);
  const [categoryData, setCategoryData] = useState({});
  const [display, setDisplay] = useState(true);
  const [display2, setDisplay2] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentCategory, setCurrentCategory] = useState(false)
  
  
  
  const [category, setCategory] = useState('')
  
   
  
  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    console.log(selectedOption)
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  });
  const apiURLCategory = "http://localhost:8000/categories"; 
  
  useEffect(() => {
      getAPICategoryWithFetch();
  }, []);
      
  const getAPICategoryWithFetch = async () => {
      const response = await fetch(apiURLCategory);
      const jsonData = await response.json();
      setCategoryData(jsonData);
        
  };
  const options = [
    
    
  ]

  //ajout d'un const current category
  const handleCategory2 = (e) => {
    
      setDisplay(true)
      setDisplay2(false)
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        
          name: category,
          
          identifier: category
        }),
      };
      fetch("http://localhost:8000/api/category/create", requestOptions)
        .then((response) => response.json())
        .then((data) => setPostId(data.id));
       setCurrentCategory(true)
        

      
      
      
      
};
  
  
  
  
  Object.values(categoryData).map((data, idx)=>( 
    options.push({value: data.name, label: data.name})
   
  ))
  if(category){
    options.push({value: category, label: category})

  }

  
  
  
  

  const handleCategory = () => {
    
          setDisplay(false)
          setDisplay2(true)

    
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
                <div className='payment__input__category'><Select options={options} defaultValue={selectedOption}
        onChange={setSelectedOption}   name='option' /></div>
              
              <button className='addproduct-btn' onClick={handleCategory}>
                New category
              </button>
              
            </div>
            <div
              className='payment__priceContainer'
              style={{ display: display2 ? "block" : "none" }}
            >
                <div className='payment__input__category'><input type="text" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="New category name"></input></div>
              <button className='addproduct-btn' onClick={handleCategory2} onChange={setSelectedOption}>
                Add Category
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
