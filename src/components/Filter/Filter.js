import React from 'react';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';

function Filter({ value, onChangeFilter }) {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
        className={styles.input}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func,
};

export default Filter;
