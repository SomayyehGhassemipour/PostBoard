import PropTypes from 'prop-types';

export default function SeperatorLine(props) {
	return (
		<>
			{props.type === 'c' ? (
				<div className={props.type + '-line'} />
			) : props.content ? (
				<div className="row">
					<div className={props.type + '-half-line'} />
					<p className="text-grey-300">{props.content}</p>
					<div className={props.type + '-half-line'} />
				</div>
			) : (
				<div className="line" />
			)}
		</>
	);
}
SeperatorLine.propTypes = {
	type: PropTypes.string.isRequired,
	content: PropTypes.string,
};
