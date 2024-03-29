import classes from './CartItem.module.css';

function CartItem({ name, price, count, onRemove, onAdd }) {
  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{`$${price.toFixed(2)}`}</span>
          <span className={classes.amount}>x {count}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
}

export default CartItem;
