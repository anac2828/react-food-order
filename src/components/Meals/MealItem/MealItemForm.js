import styles from './MealItemForm.module.css';
import Input from '../../UI/Input';

const Form = props => {
  return (
    <form className={styles.form}>
      <label htmlFor={props.id}>{props.label}</label>
      <Input />
      <button>+ Add</button>
    </form>
  );
};

export default Form;
