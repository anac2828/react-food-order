import { useContext } from 'react';
import MealItemForm from './MealItemForm';
import styles from './ListItem.module.css';
import CartContext from '../../../store/cart-context';

const ListItem = (props) => {
	//this will stablish a connection
	const cartData = useContext(CartContext);

	const addToCartHandler = (amount) => {
		cartData.addItem({
			id: props.id,
			name: props.name,
			amount: amount,
			price: props.price,
		});
	};
	return (
		<li className={styles['list-item']}>
			<div className={styles['list-item_details']}>
				<h3>{props.name}</h3>
				<div className={styles.desc}>{props.description}</div>
				<div className={styles.price}>{`$${props.price.toFixed(2)}`}</div>
			</div>
			<div className={styles['list-item_qty']}>
				<MealItemForm id={props.id} onAddToCart={addToCartHandler} />
			</div>
		</li>
	);
};
export default ListItem;
