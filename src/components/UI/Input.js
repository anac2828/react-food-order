import React from 'react';
import styles from './Input.module.css';

//use forwardRef when you want to use the ref property on a custom component. First args are (props, ref)
const Input = React.forwardRef(({ input, label }, ref) => {
  return (
    <div className={styles.input}>
      <label className={styles.label} htmlFor={input.id}>
        {label}
      </label>
      {/* use the spread operator so that the input keys are added to the input element  */}
      <input ref={ref} {...input} />
    </div>
  );
});

export default Input;
