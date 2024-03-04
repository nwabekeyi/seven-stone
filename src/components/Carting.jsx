
import "../styles/Carting.css";

function CartingDialog({ onClose }) {
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: 1, // You may need to generate a unique ID for each product
        name: 'Hands-Free Air Cooling Neck Fan',
        price: '$4.96',
        color: selectedColor,
        description: 'Rechargeable / Hands-Free. Working Time: 3-6 Hours; Three Gears. Charging Time: About 2.5 Hours. Battery Capacity: 1500mAh.',
        qty: quantity
      }
    });
    onClose();
  };

  return (
    <div id="carting">
      <h2 className="product-detailss">Product Details</h2>
      <div className="product-info">
        <div>
          <div className='product-infos'>
            <p>Product Name: </p>
            <p>Hands-Free Air Cooling Neck Fan</p>
          </div>
          <hr />
         <div className='product-infos'>
         <p>Product Price:</p>
          <p>$4.96</p>
         </div>
         <hr />

          <div className='product-infos'>
          <label htmlFor="color">Color:</label>
          <select id="color" value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
            <option value="white">White</option>
            <option value="blue">Blue</option>
            <option value="black">Black</option>
          </select>
          </div>
          <hr />
         <div className='product-infos'>
         <label htmlFor="quantity">Quantity:</label>
          <input type="number" id="quantity" value={quantity} min="1" onChange={(e) => setQuantity(parseInt(e.target.value))} />
          
         </div>
         <hr />
         <div className='product-infos'>
         <p>Product Description</p>
          <p>product description here
          </p>
         </div>
         <hr />
          <button onClick={handleAddToCart}>Add to Cart</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default CartingDialog;
