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
          price={800}
          rating={4}
          image="https://m.media-amazon.com/images/I/51CZok8eeaL._AC_SL1000_.jpg"
        />
        <Product
          id="2"
          title="SNIDEL x Victorian Mask"
          price={770}
          rating={4}
          image="https://m.media-amazon.com/images/I/4108iPOB3aL._AC_SL1000_.jpg"
        />
        <Product
          id="3"
          title="SWIFTBIRD Slip-on Sneakers"
          price={1500}
          rating={4}
          image="https://m.media-amazon.com/images/I/61A95jgYtYL._AC_UL1001_.jpg"
        />
        <Product
          id="4"
          title="NONIO(ノニオ) Plus Whitening Dental Rinse Set"
          price={1500}
          rating={4}
          image="https://m.media-amazon.com/images/I/61WEouzfEaL._AC_SL1500_.jpg"
        />
        <Product
          id="5"
          title="FORRICA Women's Mini Shoulder Bag"
          price={2977}
          rating={4}
          image="https://m.media-amazon.com/images/I/61Ww0Le8YfL._AC_UL1500_.jpg"
        />
        <Product
          id="6"
          title="https://m.media-amazon.com/images/I/51c8bpkEkGL._AC_SL1060_.jpg"
          price={1980}
          rating={4}
          image="https://m.media-amazon.com/images/I/61A95jgYtYL._AC_UL1001_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
