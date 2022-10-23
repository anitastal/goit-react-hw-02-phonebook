import { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactList extends Component {
  render() {
    const { onFilterContacts, deleteUser } = this.props;

    return (
      <ul>
        {onFilterContacts.map(contact => (
          <li key={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
            <button onClick={() => deleteUser(contact.id)} type="button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
ContactList.propTypes = {
  onFilterContacts: PropTypes.arrayOf(PropTypes.node),
  deleteUser: PropTypes.func,
};
