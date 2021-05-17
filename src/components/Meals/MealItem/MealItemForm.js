import styles from './MealItemForm.module.css';
import Button from '../../UI/Button';

const Input = props => {
  return (
    <form className={styles['input-group']}>
      <label htmlFor={props.id}>{props.label}</label>
      <input type={props.type} />
      <Button>+ Add</Button>
    </form>
  );
};

export default Input;
