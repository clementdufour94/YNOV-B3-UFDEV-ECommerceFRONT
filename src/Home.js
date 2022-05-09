import React, { useState, useEffect } from 'react'
import "./Home.css"
import Product from './Product'
import Carousel from 'react-grid-carousel'
import Select from 'react-select'



function Home() {
  const apiURLProducts = "http://localhost:8000/products"; 
  const [productData, setProductData] = useState({});
  const [selectedValue, setSelectedValue] = useState();
  useEffect(() => {
      getAPIProductWithFetch();
  }, []);
      
  const getAPIProductWithFetch = async () => {
      const response = await fetch(apiURLProducts);
      const jsonData = await response.json();
      setProductData(jsonData);
        
  };

  const apiURLCategory = "http://localhost:8000/categories"; 
  const [categoryData, setCategoryData] = useState({});
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
  Object.values(categoryData).map((data, idx)=>( 
    options.push({value: data.name, label: data.name})
  ))

  const handleChange = e => {
    setSelectedValue(e.value);
  }
  console.log(selectedValue)
  
  
  
    
  
    

      


      
      
      
  return (
    
    <div className="home">
      <script src="https://unpkg.com/react-flip-move/dist/react-flip-move.js"></script>

      
        <div className="home__container">
        
            <img
            className="home__image" 
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="">
            </img>
            <div>
            <Select options={options} onChange={handleChange} />
            </div>
            
           
            
              <div className="home__row">
              
                <Carousel   rows={2} cols={3}  >
                  {Object.values(productData).map((data, idx)=>(
                    <Carousel.Item>
                     
                      <Product id={data.id} title={data.name} price={data.price} image={data.photo}
                        rating={data.average_score} />

                      
                      
                    </Carousel.Item>
                  
                  
                  
      
                  ))}
                    
                  

                </Carousel>
                
                    
              </div>
            
            
               

            
            <div className="home__row">
            

            </div>
            <div className="home__row">
            

            </div>
        





        </div>
        





    </div>
  )
}

export default Home