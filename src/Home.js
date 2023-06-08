import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/realme/MonsoonCarnival/9thJun/D47093414_IN_WLD_MonsoonCarnival_realme_DesktopTallHero_1500x600._CB634532769_.jpg"
          alt="cover"
        />
        <div className="home_row">
          <Product
            id="7788442"
            title="A33 6Gb Ram and 128 Gb"
            price={90000}
            image="https://m.media-amazon.com/images/I/41dJKGz9hwL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="7799442"
            title="The lean startup"
            price={900}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="7799222"
            title="Redgear A-15 Wired Gaming Mouse with Upto 6400 DPI, RGB and Driver Customization for PC(Black)"
            price={449}
            image="https://m.media-amazon.com/images/I/61MUoISbzjL._AC_UL480_FMwebp_QL65_.jpg"
            rating={3}
          />
          <Product
            id="7799552"
            title="Fire-Boltt Indias No 1 Smartwatch Brand Ring Bluetooth Calling with SpO2 and 1.7” Metal Body , spO2 (Black)"
            price={4999}
            image="https://m.media-amazon.com/images/I/61ob4hkpYhL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="7799332"
            title="AmazonBasics 670 L French Door Frost Free Refrigerator (Silver, Triple cooling zone, Convertible)"
            price={71999}
            image="https://m.media-amazon.com/images/I/61TDcCsF9CL._SL1500_.jpg"
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            id="7799443"
            title='Lenovo Legion 5 Pro AMD Ryzen 7 5800H 16" 500Nits QHD Gaming Laptop(16GB/1TB SSD/RTX 3060 6GB GDDR6 Graphics/165Hz/Windows 11/Office 2021/RGB Backlit/3mnth Xbox Game Pass/Storm Grey/2.45Kg),82JQ00JCIN'
            price={142800}
            image="https://m.media-amazon.com/images/I/71glTO3lJNL._SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
