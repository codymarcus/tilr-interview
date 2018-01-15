import * as contactService from '../services/contacts'
import { sortByLastName } from '../helpers'

export const fetchContacts = () => (dispatch) => {
  dispatch({ type: 'FETCHING_ALL_CONTACTS' })
  contactService.getContacts().then(response => dispatch({
    type: 'SET_ALL_CONTACTS',
    payload: {
      allContacts: response.data.sort(sortByLastName)
    }
  }))
}

export const setFilter = filter => (dispatch, getState) => {
  const { allContacts } = getState().contacts

  const filteredContacts = allContacts
    .filter((contact) => {
      const regex = new RegExp(filter, 'i')
      const filterAttributes = ['firstName', 'lastName', 'company', 'email', 'address', 'phone']
      const filterString = filterAttributes.map(attr => contact[attr] || '').join(' ')
      return regex.test(filterString)
    })
    .sort(sortByLastName)

  dispatch({
    type: 'FILTER_CONTACTS',
    payload: {
      filteredContacts
    }
  })
}

export const selectContact = contact => ({
  type: 'SET_SELECTED_CONTACT',
  payload: {
    contact
  }
})

export const setIsEditing = isEditing => ({
  type: 'SET_IS_EDITING',
  payload: {
    isEditing
  }
})

export const setEditContactAttributeValue = (attr, value) => ({
  type: 'SET_EDIT_CONTACT_ATTRIBUTE_VALUE',
  payload: {
    attr,
    value
  }
})

export const saveEditedContact = () => (dispatch, getState) => {
  dispatch({ type: 'SAVING_EDITED_CONTACT' })
  const editedContact = getState().contacts.editContact
  contactService.editContact(editedContact.id, editedContact)
    .then(() => dispatch({ type: 'SAVED_EDITED_CONTACT' }))
}

export const deleteContact = id => (dispatch, getState) => {
  dispatch({ type: 'DELETING_CONTACT' })
  const contact = getState().contacts.editContact
  contactService.deleteContact(contact.id)
    .then(() => dispatch({ type: 'DELETED_CONTACT' }))
}
