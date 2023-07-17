import PropTypes from 'prop-types';

const Input = (props) => {
	return (
		<div className="field">
			{props.label && <label>{props.label}</label>}
			{props.element === 'input' ? (
				<input
					name={props.name}
					type={props.type}
					placeholder={props.placeholder}
					defaultValue={props.value}
					required
					onChange={props.onchangeHandler}
				/>
			) : (
				<textarea
					name={props.name}
					rows="7"
					defaultValue={props.value}
					placeholder={props.placeholder}
					onChange={props.onchangeHandler}
					style={{
						background: 'var(--palette-grey-200)',
						border: 'none',
					}}
				/>
			)}
		</div>
	);
};
export default Input;
Input.propTypes = {
	name: PropTypes.string,
	label: PropTypes.string,
	element: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	onchangeHandler: PropTypes.func,
	value: PropTypes.string,
};
