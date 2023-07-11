import PropTypes from 'prop-types';

const Button = (props) => {
	return (
		<button
			className={props.classname}
			form={props.form}
			onClick={props.clickHandler}
			type={props.type}
		>
			{props.children}
		</button>
	);
};
export default Button;
Button.propTypes = {
	classname: PropTypes.string.isRequired,
	form: PropTypes.string,
	type: PropTypes.string,
	children: PropTypes.node.isRequired,
	clickHandler: PropTypes.func,
};
