import React, { useState, useEffect } from 'react'
import "./Home.css"
import Product from './Product'
import Carousel from 'react-grid-carousel'
import Select from 'react-select'



function Home() {
  const apiURLProducts = "http://localhost:8000/products"; // https://api.github.com/users/deekshasharma ca fonctionne avec ca 
  const [productData, setProductData] = useState({});
  useEffect(() => {
      getAPIProductWithFetch();
  }, []);
      
  const getAPIProductWithFetch = async () => {
      const response = await fetch(apiURLProducts);
      const jsonData = await response.json();
      setProductData(jsonData);
        
  };

  const apiURLCategory = "http://localhost:8000/products"; // https://api.github.com/users/deekshasharma ca fonctionne avec ca 
  const [categoryData, setCategoryData] = useState({});
  useEffect(() => {
      getAPICategoryWithFetch();
  }, []);
      
  const getAPICategoryWithFetch = async () => {
      const response = await fetch(apiURLCategory);
      const jsonData = await response.json();
      setCategoryData(jsonData);
        
  };
  console.log(categoryData)
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  if(options.label='Vanilla'){
    console.log("vanilla")
  }
  
      
      
      
      

      


      
      
      
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
            <Select options={options} />
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
            <Product id="1" title='Apple AirPods avec boîtier de Charge Filaire (2ᵉ génération)' price={128} image='https://images-eu.ssl-images-amazon.com/images/I/7120GgUKj3L._AC_UL906_SR906,600_.jpg'
                  rating={5} />
            <Product />
            <Product />

            </div>
            <div className="home__row">
            <Product />

            </div>
        





        </div>
        





    </div>
  )
}

export default Home