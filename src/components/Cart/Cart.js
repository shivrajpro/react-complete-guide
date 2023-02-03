import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  console.log("items",cartCtx.items)
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <li key={'c1'} >
          <strong>{item.name}</strong> x {item.amount}
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose} >
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartCtx.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose} >Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;