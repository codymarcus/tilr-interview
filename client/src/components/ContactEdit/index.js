import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setIsEditing, setIsCreating, saveEditedContact, deleteContact, saveCreatedContact } from '../../actions'
import EditContactAttributeList from './EditContactAttributeList'
import './style.css'

const EditContact = props => (
  <div>
    <EditContactAttributeList contact={props.contact} />
    <div className='button-container'>
      <button
        className='btn btn-primary col-12'
        onClick={props.isCreating ? props.saveCreatedContact : props.saveEditedContact}
      >
        Save
      </button>
    </div>
    <div className='button-container'>
      <button
        className='btn btn-outline-secondary col-12'
        onClick={() => {
          props.setIsEditing(false)
          props.setIsCreating(false)
        }}
      >
        Cancel
      </button>
    </div>
    {props.isCreating 
      ? null
      : (
        <div className='button-delete-container'>
          <button
            className='btn btn-danger col-12'
            onClick={props.deleteContact}
          >
            Delete
          </button>
        </div>
      )
    }
  </div>
)

EditContact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
  isCreating: PropTypes.bool.isRequired,
  saveCreatedContact: PropTypes.func.isRequired,
  saveEditedContact: PropTypes.func.isRequired,
  setIsCreating: PropTypes.func.isRequired,
  setIsEditing: PropTypes.func.isRequired
}

const mapStateToProps = ({ contacts }) => ({
  contact: contacts.editContact,
  isCreating: contacts.isCreating
})

const mapDispatchToProps = {
  setIsEditing,
  setIsCreating,
  saveEditedContact,
  saveCreatedContact,
  deleteContact
}

export default connect(mapStateToProps, mapDispatchToProps)(EditContact)
