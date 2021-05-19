import Button from '../../UI/Input';
import MealItemForm from './MealItemForm';
import styles from './ListItem.module.css';

const ListItem = props => {
  return (
    <li className={styles['list-item']}>
      <div className={styles['list-item_details']}>
        <h3>{props.name}</h3>
        <div className={styles.desc}>{props.description}</div>
        <div className={styles.price}>{`$${props.price.toFixed(2)}`}</div>
      </div>
      <div className={styles['list-item_qty']}>
        <MealItemForm />
      </div>
    </li>
  );
};
export default ListItem;
