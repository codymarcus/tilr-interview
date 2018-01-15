import { getContacts } from '../services/contacts'
import { sortByLastName } from '../helpers'

export const fetchContacts = () => (dispatch) => {
  dispatch({ type: 'FETCHING_ALL_CONTACTS' })
  getContacts().then(response => dispatch({
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
