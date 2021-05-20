import styles from './Input.module.css';

const Input = (props) => {
	return (
		<div className={styles.input}>
			<label className={styles.label} htmlFor={props.input.id}>
				{props.label}
			</label>
			{/* use the spread operator so that the input keys are added to the input element  */}
			<input {...props.input} />
		</div>
	);
};

export default Input;
