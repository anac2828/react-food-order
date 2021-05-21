import React from 'react';
import styles from './Input.module.css';

//use forwardRef when you want to use the ref property on a custom component
const Input = React.forwardRef((props, ref) => {
	return (
		<div className={styles.input}>
			<label className={styles.label} htmlFor={props.input.id}>
				{props.label}
			</label>
			{/* use the spread operator so that the input keys are added to the input element  */}
			<input ref={ref} {...props.input} />
		</div>
	);
});

export default Input;
