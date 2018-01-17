import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
        {this.props.contacts.map(contact =>
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

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  fetchContacts: PropTypes.func.isRequired,
  selectContact: PropTypes.func.isRequired
}

const mapStateToProps = ({ contacts }) => ({
  contacts: contacts.filteredContacts
})

const mapDispatchToProps = {
  fetchContacts,
  selectContact
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
