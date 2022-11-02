import PropTypes from 'prop-types';

export const Notification = ({ message }) => <p>{message}</p>;

Notification.defaultProps = {
  message: '',
};

Notification.propTypes = {
  message: PropTypes.string,
};
