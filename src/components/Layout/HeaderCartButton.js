//import useContext to use the CartProvider component that gives access to the cart-context data.
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
  //whenever the context changes in the CartProvider component the headerCartButton will be render again
  const cartData = useContext(CartContext);

  const numOfCartItems = cartData.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={props.onClose}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
