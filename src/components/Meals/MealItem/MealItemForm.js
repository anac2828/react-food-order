import { useRef, useState } from 'react';
import styles from './MealItemForm.module.css';
import Input from '../../UI/Input';

function Form({ id, onAddToCart }) {
  const [amountIsValid, setAmountIsValid] = useState(true);

  // links to the input component
  const amountInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    //this will give you access to the entered value as a string
    const enteredAmount = +amountInputRef.current.value;

    if (enteredAmount === 0 || enteredAmount < 1 || enteredAmount > 5) {
      setAmountIsValid(false);
      return;
    }

    onAddToCart(enteredAmount);
  }

  // props.id is coming form the Form component
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: `amount_${id}`,
          type: 'number',
          // min: '1',
          // max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
}

export default Form;
