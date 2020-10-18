import React from 'react';
import styles from './Contacts.module.css';
import PropTypes from 'prop-types';

function Contacts({ contacts, onDelete }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p className={styles.p}>
            {name}:{number}
          </p>
          <button
            type="button"
            className={styles.button}
            onClick={() => onDelete(id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string).isRequired),
  onDelete: PropTypes.func,
};

export default Contacts;
