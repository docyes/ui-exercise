import React, { PropTypes } from 'react';
import widgetProptype from './proptypes/widget';
import './Widget.css';

const propTypes = {
  data: widgetProptype,
  onBackClick: PropTypes.func.isRequired,
};

const defaultProps = {
};

function Widget(props) {
  const { data, onBackClick } = props;
  function handleBackCick() {
    onBackClick();
  }
  return (
    <div className="Widget">
      <h1 className="h4">Widget Details</h1>
      <dl className="Widget">
        <dt>Name</dt>
        <dd>{data.name}</dd>
        <dt>Size</dt>
        <dd>{data.size}</dd>
        <dt>Capacity</dt>
        <dd>{data.capacity}</dd>
      </dl>
      <button type="button" className="btn btn-primary" onClick={handleBackCick}>Back</button>
    </div>
  );
}

Widget.propTypes = propTypes;
Widget.defaultProps = defaultProps;

export default Widget;
