import React from 'react'
import Product from '../../components/Product/Product'
import "./Home.css"

function Home() {
      return (
            <div className="home">
                  <div className="home__container">
                        <img 
                              className="home__img"
                              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                              alt="home"
                        />
                        <div className="home__row">
                              <Product 
                                    id="1"
                                    title="The Lean Startup"
                                    price={29.99}
                                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400_.jpg"
                                    rating={5}
                              />
                              <Product 
                                    id="2"
                                    title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whist, 5 Litre Glass Bowl"
                                    price={239.0}
                                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                                    rating={4}
                              />
                        </div>
                        <div className="home__row">
                              <Product 
                                    id="3"
                                    title="Samsung 49' Curved LED Gaming Monitor"
                                    price={199.99}
                                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                                    rating={3}
                              />
                              <Product 
                                    id="4"
                                    title="The Lean Startup"
                                    price={29.99}
                                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400_.jpg"
                                    rating={5}
                              />
                              <Product 
                                    id="5"
                                    title="The Lean Startup"
                                    price={29.99}
                                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400_.jpg"
                                    rating={5}
                              />
                        </div>
                        <div className="home__row">
                              <Product 
                                    id="6"
                                    title="Samsung 49' Curved LED Gaming Monitor - Super Ultra Wide Dual 5120 x 1440"
                                    price={29.99}
                                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX335_.jpg"
                                    rating={5}
                              />
                        </div>
                  </div>
            </div>
      )
}

export default Home
