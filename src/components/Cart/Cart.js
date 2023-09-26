import { useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';

function Cart({ onShowCart }) {
  const cartData = useContext(CartContext);
  const hasItems = cartData.items.length > 0;

  function addItemToCartHandler(item) {
    cartData.addItem({ ...item, count: 1 });
  }
  function removeItemFromCartHandler(id) {
    cartData.removeItem(id);
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartData.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          count={item.count}
          // bind will allow the function to be executed at a later time. The item object is being pass here to the remove and add handler functions
          onRemove={removeItemFromCartHandler.bind(null, item.id)}
          onAdd={addItemToCartHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onShowCart={onShowCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartData.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button-alt']} onClick={onShowCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
