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
					required
					onChange={props.onchangeHandler}
				/>
			) : (
				<textarea
					name={props.name}
					rows="4"
					placeholder={props.placeholder}
					onChange={props.onchangeHandler}
				/>
			)}
		</div>
	);
};
export default Input;
Input.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	element: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	onchangeHandler: PropTypes.func,
};
