const defaultState = {
  allContacts: [],
  editContact: null,
  filteredContacts: [],
  isEditing: false,
  isFetchingAllContacts: false,
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
        isEditing: false
      }
    case 'SET_IS_EDITING':
      return {
        ...state,
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
      return {
        ...state,
        isEditing: false,
        allContacts: state.allContacts.map(contact => contact.id === state.editContact.id ? { ...state.editContact } : contact),
        filteredContacts: state.filteredContacts.map(contact => contact.id === state.editContact.id ? { ...state.editContact } : contact),
        selected: { ...state.editContact }
      }
    default:
      return state
  }
}

export default contacts
