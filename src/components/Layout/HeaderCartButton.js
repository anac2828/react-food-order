//import useContext to use the CartProvider component that gives access to the cart-context data.
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

function HeaderCartButton({ onShowCart }) {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  //whenever the context changes in the CartProvider component the headerCartButton will be render again
  const cartData = useContext(CartContext);

  // curNumber is 0 at the beginning
  const numOfCartItems = cartData.items.reduce((curNumber, item) => {
    return curNumber + item.count;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ''
  }`;

  useEffect(() => {
    if (cartData.items.length === 0) return;
    // will add the bump class
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      // will remove the bumpt class
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartData.items]);

  return (
    <button className={btnClasses} onClick={onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numOfCartItems}</span>
    </button>
  );
}
export default HeaderCartButton;
