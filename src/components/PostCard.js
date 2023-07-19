import PropTypes from 'prop-types';
import Icon from '../shared components/Icon';

export const PostCard = (props) => {
	return (
		<>
			<div className="container-row">
				<h4>{props.title}</h4>
			</div>

			<div className="container-row">
				<Icon url="/icons/icons8-avatar-24.png" name="author" />
				<p>{props.author}</p>
			</div>

			<div className=" bg-grey-200" style={{ borderRadius: '0.5rem' }}>
				<p style={{ padding: '0.5rem' }}>{props.description}</p>
			</div>
		</>
	);
};
PostCard.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};
