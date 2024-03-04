import "../styles/Home.css";
import CartingDialog from "./Carting";
import { useState } from "react";


const Order = () => {
  const [showCartingDialog, setshowCartingDialog] = useState(false);

  const handleStartOrderRequest = () => {
    setshowCartingDialog(true);
  };

  const handleClosePaymentModal = () => {
    setshowCartingDialog(false);
  };
    return(

        <section>
             <article className="order-details">
  <div className="prices" style={{ backgroundColor:"#252B48", color: 'white' , padding: "10px", borderRadius: "8px"}}>
       <div >
       <p>2 - 999 pieces</p>
        <p className="naira-price">US$4.96</p>
    </div>
    <div>
       <p>1000 - 4999 pieces</p>
       <p className="naira-price">US$4.79</p>
    </div>
    <div>
        <p>= 5000 pieces</p>
        <p className="naira-price">US$4.59</p>
    </div>
  </div>
  <hr />
  <div>
    <p className="variation">Variations</p>
    <div className="select-variation">
    <p>Total options: 3 Color.</p>
    <button>Select now</button>
    </div>
  </div>
 
  <div className="product-description">
    <h2 style={{  color: '#252B48' }}>Product Description</h2>
  <table className="product-table">
      <tbody>
        <tr>
          <td>Name</td>
          <td>Hands-Free Air Cooling Neck Fan</td>
        </tr>
        <tr>
          <td>Material</td>
          <td>ABS + Silicone Gel</td>
        </tr>
        <tr>
          <td>Product Size</td>
          <td>182 x 56 x 203mm</td>
        </tr>
        <tr>
          <td>Feature</td>
          <td>Rechargeable / Hands-Free</td>
        </tr>
        <tr>
          <td>Working Time</td>
          <td>3-6 Hours; Three Gears</td>
        </tr>
        <tr>
          <td>Charging Time</td>
          <td>About 2.5 Hours</td>
        </tr>
        <tr>
          <td>Battery Capacity</td>
          <td>1500mAh</td>
        </tr>
        <tr>
          <td>Product Color</td>
          <td>White; Blue; Black</td>
        </tr>
      </tbody>
    </table>
  </div>

<hr />
<div style={{marginTop: "20px"}}>
    <p style={{  color: '#252B48' }}>Find a Delivery companany around you</p>
    <div className="order-buttons">
    <button className="order-button" onClick={handleStartOrderRequest}>
        Start order request
      </button>    
      {showCartingDialog && (
        <CartingDialog onClose={handleClosePaymentModal} />
      )}
      <button className="contact-button">Contact Us</button>
    
    </div>
  </div>
</article>

        </section>
    )




}
export default Order