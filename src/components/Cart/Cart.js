import React from 'react';
import classes from './Cart.module.css';
import Model from '../UI/Model';
const Cart = (props) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[
        {
          id: 'c1',
          name: 'Frozen yoghurt',
          amount: 2,
          price: 12.99,
        },
      ].map((cartItem) => (
        <li>{cartItem.name}</li>
      ))}
    </ul>
  );

  return (
    <Model onBackdrop={props.onClose}>
      <div>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>35.63</span>
        </div>
        <div className={classes.actions}>
          <button className={['button--alt']} onClick={props.onClose}>
            Close
          </button>
          <button className={classes.button}>Order</button>
        </div>
      </div>
    </Model>
  );
};

export default Cart;
