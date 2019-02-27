/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
 * a row of staff
 */
function StaffRow(props) {
  return (
    <div className="staff-row" onClick={props.onClick}>
      <FontAwesomeIcon icon={props.icon} />
      <span className="staff-name">
        {props.name}
      </span>
      <span className="staff-email">
        {props.email}
      </span>
    </div>
  );
}

StaffRow.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default StaffRow;
