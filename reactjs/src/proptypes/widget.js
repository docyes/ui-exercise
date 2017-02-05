import { PropTypes } from 'react';

export default PropTypes.shape({
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  capacity: PropTypes.number.isRequired,
});
