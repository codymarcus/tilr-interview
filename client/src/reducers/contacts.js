import { sortByLastName } from '../helpers'

const defaultState = {
  allContacts: [],
  editContact: {
    firstName: null,
    lastName: null,
    email: null,
    address: null,
    phone: null
  },
  filteredContacts: [],
  isEditing: false,
  isFetchingAllContacts: false,
  isCreating: false,
  selected: null
}

const contacts = (state = defaultState, action) => {
  switch(action.type) {
    case 'FETCHING_ALL_CONTACTS':
      return {
        ...state,
        isFetchingAllContacts: true
      }
    case 'SET_ALL_CONTACTS':
      return {
        ...state,
        isFetchingAllContacts: false,
        allContacts: action.payload.allContacts,
        filteredContacts: action.payload.allContacts
      }
    case 'FILTER_CONTACTS':
      return {
        ...state,
        filteredContacts: action.payload.filteredContacts
      }
    case 'SET_SELECTED_CONTACT':
      return {
        ...state,
        selected: action.payload.contact,
        isCreating: false,
        isEditing: false
      }
    case 'SET_IS_EDITING':
      return {
        ...state,
        isCreating: false,
        isEditing: action.payload.isEditing,
        editContact: action.payload.isEditing ? { ...state.selected } : null
      }
    case 'SET_EDIT_CONTACT_ATTRIBUTE_VALUE':
      return {
        ...state,
        editContact: {
          ...state.editContact,
          [action.payload.attr]: action.payload.value
        }
      }
    case 'SAVED_EDITED_CONTACT':
      const newContacts = state.allContacts
        .map(contact => contact.id === state.editContact.id ? { ...state.editContact } : contact)
        .sort(sortByLastName)
      return {
        ...state,
        isEditing: false,
        allContacts: newContacts,
        filteredContacts: newContacts,
        selected: { ...state.editContact }
      }
    case 'SET_IS_CREATING':
      return {
        ...state,
        isCreating: action.payload.isCreating,
        isEditing: false,
        selected: null,
        editContact: defaultState.editContact
      }
    case 'SAVED_CREATED_CONTACT':
      return {
        ...state,
        isEditing: false,
        isCreating: false,
        allContacts: [...state.allContacts, action.payload.newContact].sort(sortByLastName),
        filteredContacts: [...state.allContacts, action.payload.newContact].sort(sortByLastName),
        selected: { ...action.payload.newContact }
      }
    case 'DELETED_CONTACT':
      return {
        ...state,
        isEditing: false,
        selected: null,
        allContacts: state.allContacts.filter(contact => contact.id !== state.selected.id),
        filteredContacts: state.filteredContacts.filter(contact => contact.id !== state.selected.id)
      }
    default:
      return state
  }
}

export default contacts
