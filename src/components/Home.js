import React from "react";
import Product from "./Product";
import "../assets/stylesheets/Home.css";


function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.JPG"
        alt=""
      />
      <div className="home__row">
        <Product
          id="1"
          title="Nano Toothbrush"
          price={800.96}
          rating={4}
          image="https://m.media-amazon.com/images/I/51CZok8eeaL._AC_SL1000_.jpg"
        />
        <Product
          id="2"
          title="Nano Toothbrush"
          price={800.96}
          rating={4}
          image="https://m.media-amazon.com/images/I/51CZok8eeaL._AC_SL1000_.jpg"
        />
        <Product
          id="3"
          title="Nano Toothbrush"
          price={800.96}
          rating={4}
          image="https://m.media-amazon.com/images/I/51CZok8eeaL._AC_SL1000_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
