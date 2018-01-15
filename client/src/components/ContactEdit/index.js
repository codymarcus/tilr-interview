import React from 'react'
import { connect } from 'react-redux'
import { setIsEditing, saveEditedContact, deleteContact } from '../../actions'
import EditContactAttribute from './EditContactAttribute'
import './style.css'

const labels = {
  firstName: 'first name',
  lastName: 'last name',
  company: 'company',
  address: 'address',
  phone: 'phone',
  email: 'email'
}

const EditContact = ({ editContact, setIsEditing, saveEditedContact, deleteContact }) => (
  <div>
    {Object.keys(labels).map(attr =>
      labels[attr]
        ? <EditContactAttribute key={attr} label={labels[attr]} attribute={attr} value={editContact[attr] || ''} />
        : null
    )}
    <div className='button-container'>
      <button
        className='btn btn-primary col-12'
        onClick={saveEditedContact}
      >
        Save
      </button>
    </div>
    <div className='button-container'>
      <button
        className='btn btn-outline-secondary col-12'
        onClick={() => setIsEditing(false)}
      >
        Cancel
      </button>
    </div>
    <div className='button-delete-container'>
      <button
        className='btn btn-danger col-12'
        onClick={deleteContact}
      >
        Delete
      </button>
    </div>
  </div>
)

const mapStateToProps = ({ contacts }) => ({
  editContact: contacts.editContact
})

const mapDispatchToProps = {
  setIsEditing,
  saveEditedContact,
  deleteContact
}

export default connect(mapStateToProps, mapDispatchToProps)(EditContact)
