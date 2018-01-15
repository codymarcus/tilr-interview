import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchContacts, selectContact } from '../../actions'
import ContactItem from './ContactItem'

class ContactList extends Component {
  componentWillMount() {
    this.props.fetchContacts()
  }

  render() {
    return (
      <div className='list-group contact-list'>
        {this.props.contacts.filteredContacts.map(contact =>
          <ContactItem
            key={contact.id}
            onClick={() => this.props.selectContact(contact)}
            {...contact}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ contacts }) => ({
  contacts
})

const mapDispatchToProps = {
  fetchContacts,
  selectContact
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
