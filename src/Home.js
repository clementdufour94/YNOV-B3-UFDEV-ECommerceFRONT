import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className="home">

        <div className="home__container">
            <img
            className="home__image" 
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="">
            </img>
            <div className="home__row">
                <Product id="1" title='Apple AirPods avec boîtier de Charge Filaire (2ᵉ génération)' price={128} image='https://images-eu.ssl-images-amazon.com/images/I/7120GgUKj3L._AC_UL906_SR906,600_.jpg'
                rating={5} />
                <Product id="2" title='Echo Dot (4e génération), Enceinte connectée avec Alexa, Anthracite' rating={4} price={59.99} image='https://images-eu.ssl-images-amazon.com/images/I/71Q9d6N7xkL._AC_UL906_SR906,600_.jpg' />
               

            </div>
            <div className="home__row">
            <Product />
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