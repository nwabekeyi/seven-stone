import React, { useEffect } from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import "../styles/Cart.css";
import { useDispatch } from 'react-redux';
import {CartItem } from './redux/AddToCart';

function Cart({ showCart, handleClose }) {
  const showHideClassName = showCart ? "modal display-block" : "modal display-none";
  const dispatch = useDispatch();

  const config = {
    public_key: 'FLWPUBK-**************************-X',
    tx_ref: Date.now(),
    amount: 100,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
      phone_number: '070********',
      name: 'john doe',
    },
    customizations: {
      title: 'SevenStone',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  // Sample product information array
  const products = [
    {
      id: 1,
      name: 'Hands-Free Air Cooling Neck Fan',
      price: '$4.96',
      color: 'Blue',
      quantity: 2,
      description: 'product description here'
    }
    // Add more products here if needed
  ];

  useEffect(() => {
    // Dispatch action to update item count in the store
    dispatch(CartItem(products))
  }, [dispatch, products]);

  return (
    <div className={showHideClassName} style={{position: 'absolute', top:"400px", right: "700px"}}>
      <section className="modal-main">
        <div>
          <h2>Cart Items</h2>
          {/* Map through the products array to render each product's details */}
          {products.map((product) => (
            <div className='product-field' key={product.id}>
              <div className='product-infos'>
                <p>Product Name: {product.name}</p>
                <p>Product Price: {product.price}</p>
              </div>
              <hr />
              <div className='product-infos'>
                <p>Product Color: {product.color}</p>
              </div>
              <hr />
              <div className='product-infos'>
                <p>Quantity: {product.quantity}</p>
              </div>
              <hr />
              <div className='product-infos'>
                <p>Product Description: {product.description}</p>
              </div>
            </div>
          ))}
          <button onClick={handleClose}>Close</button>
          <button
            onClick={() => {
              handleFlutterPayment({
                callback: (response) => {
                  console.log(response);
                  closePaymentModal(); // this will close the modal programmatically
                },
                onClose: () => {},
              });
            }}
          >Proceed to Checkout</button>
        </div>
      </section>
    </div>
  );
}

export default Cart;
