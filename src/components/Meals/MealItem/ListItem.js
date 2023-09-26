import { useContext } from 'react';
import MealItemForm from './MealItemForm';
import classes from './ListItem.module.css';
import CartContext from '../../../store/cart-context';

function ListItem({ id, name, price, description }) {
  //this will stablish a connection
  const cartData = useContext(CartContext);

  function addToCartHandler(count) {
    // In CartProvider the addItemToCartHandler will be called
    // The data comes from the AvailabelMeals component
    cartData.addItem({
      id,
      name,
      count,
      price,
    });
  }
  return (
    <li className={classes['list-item']}>
      <div className={classes['list-item_details']}>
        <h3>{name}</h3>
        <div className={classes.desc}>{description}</div>
        <div className={classes.price}>{`$${price.toFixed(2)}`}</div>
      </div>
      <div className={classes['list-item_qty']}>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}
export default ListItem;
