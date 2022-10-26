import React, { useState } from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  const [drawer, setDrawer] = useState(false);
  return (
    <div className="home">
      <div className="home_container">
        {/* for the top part of the home which will be changing with time*/}
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Lawn_Garden/Ud/HGT/GW/3000X1200._CB630896464_.jpg"
          alt="home_image"
        />
        {/*list of Products to be sold,features in the home page */}
        <div className="home_row">
          <Product
            id="12849"
            title="2020 Apple MacBook Pro"
            price={133000.0}
            image="https://m.media-amazon.com/images/I/71an9eiBxpL._SL1500_.jpg"
            rating={5}
          />
          <Product
            id="3534345"
            title="ASUS ROG Claymore II Wireless "
            price={43000.0}
            image="https://m.media-amazon.com/images/I/715p-052NjL._SX679_.jpg"
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            id="24242"
            title="Apple iPhone 13 Pro Max"
            price={129000}
            image="https://m.media-amazon.com/images/I/61i8Vjb17SL._SX466_.jpg"
            rating={4}
          />
          <Product
            id="23553647"
            title="Apple Watch Series 7 "
            price={79000.0}
            image="https://m.media-amazon.com/images/I/71p1EMtYnvL._SX466_.jpg"
            rating={4}
          />
          <Product
            id="359473"
            title="JBL Bar 9.1"
            price={99999.0}
            image="https://m.media-amazon.com/images/I/51PVC63RhjS._SX679_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="4839274"
            title="Sony Bravia 164 cm (65 inches) XR series "
            price={233990.0}
            image="https://m.media-amazon.com/images/I/81bRuWhi-ML._SX679_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
