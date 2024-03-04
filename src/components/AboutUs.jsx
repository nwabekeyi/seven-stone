import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; import "../styles/Home.css";
 



function AboutUs() {
    return (
        <div style={{ width: '100vw', backgroundColor: '#f2f2f2', padding: '20px', boxSizing: 'border-box', marginTop:"10px"}}>
            <h1 style={{  color: '#252B48' }}>About Us</h1>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <p style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
                Seven Stones Communications Inc was incorporated in Nigeria by the Corporate Affairs Commission (CAC) in 1995 and in the United States of America by the Texas Secretary of State in 2003. 

Seven Stones operations spans across Nigeria and the United States of America.

The company’s areas of expertise and services include: Investment Promotions, Product Branding, Strategic Communications, Crisis & Reputation Management, and Retail through its subsidiary: 7Stones Trading.

                </p>
                
                <h2 style={{  color: '#252B48' }}>Mission</h2>
                <p style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
                To create a globally competitive “One-Stop” Firm that provides solutions ranging from Consulting to Branding and Retail.

                </p>
                <h2 style={{  color: '#252B48' }}>Vision</h2>
                <p style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
                Transform and simplify lives by making technology accessible and affordable to everyone in Nigeria particularly and Africa in General. 

                </p>
            </div>

            
        </div>

        
    );
}

export default AboutUs;
