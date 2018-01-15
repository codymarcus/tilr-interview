import React from 'react'
import { connect } from 'react-redux'
import ContactAttributeList from './ContactAttributeList'
import { setIsEditing } from '../../actions'

const ViewContact = ({ contact, setIsEditing }) => (
  <div>
    <h3 className='card-title'>{contact.firstName} {contact.lastName}</h3>
    <ContactAttributeList contact={contact} />
    <button
      className='btn btn-outline-secondary contact-panel__edit'
      onClick={() => setIsEditing(true)}
    >
      Edit
    </button>
  </div>
)

const mapDispatchToProps = {
  setIsEditing
}

export default connect(null, mapDispatchToProps)(ViewContact)
