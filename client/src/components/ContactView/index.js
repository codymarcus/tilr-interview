import React from 'react'
import { connect } from 'react-redux'
import ContactAttributeList from './ContactAttributeList'
import { setIsEditing, selectContact } from '../../actions'

const ViewContact = ({ contact, setIsEditing, selectContact }) => (
  <div>
    <h3 className='card-title'>{contact.firstName} {contact.lastName}</h3>
    <ContactAttributeList contact={contact} />
    <div className='button-container'>
      <button
        className='btn btn-outline-primary col-12'
        onClick={() => setIsEditing(true)}
      >
        Edit
      </button>
    </div>
    <div className='button-container'>
      <button
        className='btn btn-outline-secondary col-12'
        onClick={() => selectContact(null)}
      >
        Close
      </button>
    </div>
  </div>
)

const mapDispatchToProps = {
  setIsEditing,
  selectContact
}

export default connect(null, mapDispatchToProps)(ViewContact)
