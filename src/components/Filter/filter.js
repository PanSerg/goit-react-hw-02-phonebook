import React from "react";
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
    return (
      <div>
        <label>
          Find contacts by name{' '}
          <input type="text" value={value} onChange={onChange} />
        </label>
      </div>
    ); 
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};