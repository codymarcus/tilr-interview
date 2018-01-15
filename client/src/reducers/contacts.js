const defaultState = {
  allContacts: [],
  filteredContacts: [],
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
        selected: action.payload.contact
      }
    default:
      return state
  }
}

export default contacts
