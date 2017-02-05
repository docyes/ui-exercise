import React, { PropTypes } from 'react';
import './Widget.css';

const propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  capacity: PropTypes.number.isRequired,
};

const defaultProps = {
};

function Widget(props) {
  return (
    <div className="Widget">
      <h1 className="h4">Widget Details</h1>
      <dl className="Widget">
        <dt>Name</dt>
        <dd>{props.name}</dd>
        <dt>Size</dt>
        <dd>{props.size}</dd>
        <dt>Capacity</dt>
        <dd>{props.capacity}</dd>
      </dl>
      <button type="button" className="btn btn-primary">Back</button>
    </div>
  );
}

Widget.propTypes = propTypes;
Widget.defaultProps = defaultProps;

export default Widget;
