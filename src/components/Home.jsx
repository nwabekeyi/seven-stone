import React from "react";
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import "../styles/Home.css";
import Order from "./Order";
import ProductReviews from "./Reviews";
import ecommerImage2 from "../../assets/ecommerImage2.jpg"; 
import { Carousel } from 'react-responsive-carousel';
import ecommerImage3 from "../../assets/ecommerImage3.jpg"; 
import ecommerImage4 from "../../assets/ecommerImage4.jpg"; 
import ecommerImage5 from "../../assets/ecommerImage5.jpg"; 
import ecommercevid2 from "../../assets/ecommercevid2.mp4";
import ecommerImage6 from "../../assets/ecommerImage6.jpg"; 
import ecommerImage7 from "../../assets/ecommerImage7.jpg";
import ecommerImage8 from "../../assets/ecommerImage8.jpg";


const Home = () => {
  const images = [
    ecommerImage2,
    ecommerImage3,
    ecommerImage4,
    ecommerImage5,
    ecommerImage6,
    ecommerImage7,
    ecommerImage8
    
    // Add more image URLs as needed
  ];

  

  return (
    <div className="home" style={{ width: "100vw" }}>
     
       
      <section className="product">
        <article className="product-details">
        <div className="video-title">
          <h2 style={{textAlign:"center",  color: '#252B48' }}>Silent neck fan, rechargeable bladeless turbo neck ventilator, mini neck hanging fan, portable neck cooling fan.</h2>
            <video width="100%" height="360" controls  style={{borderRadius:"30px", border: "1px solid #ccc"}}>
              <source src={ecommercevid2} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
         </div>
         <hr />
         <div className='product-carousel'>
          <Carousel className="carousel-img-container" >
               {images.map((image, index) => (
                    <div key={index} style={{ height:"100vh", display:"flex", margin:'0 '}} >
                        <img src={image}  className="carousel-image"/>
                    </div>
                ))}
            </Carousel>
          </div>

          

        </article>
        <article>
        <Order />
        <ProductReviews />
       
        </article>
        
      </section>
     
      <div className="banners" >
      <div className="banner">
            <img src="https://sc04.alicdn.com/kf/Hbe806dfe65f6403f90bc3a1a34ae420cy/229799742/Hbe806dfe65f6403f90bc3a1a34ae420cy.jpg" alt="Additional" className="banner-images"/>
        </div>
        <div className="banner2">
        <img src="https://sc04.alicdn.com/kf/Hbf5be4e1425c41628dca2495efd10495e/229799742/Hbf5be4e1425c41628dca2495efd10495e.jpg" alt="banner" className="banner-images"/>
  </div>
      </div>
    </div>
  );
};

export default Home;
