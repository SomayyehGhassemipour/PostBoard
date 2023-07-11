import PropTypes from 'prop-types';

export default function Icon(props) {
	return <img src={props.url} alt={props.name} />;
}

Icon.propTypes = {
	url: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};
