import React, { Component } from 'react'
import axios from 'axios'

class ContactList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: []
    }
  }

  componentWillMount() {
    axios.get('http://localhost:3001/contacts')
      .then(response => this.setState({ contacts: response.data }))
  }

  render() {
    return (
      <div>
        {this.state.contacts.map(contact => <div key={contact.id}>{contact.firstName}</div>)}
      </div>
    )
  }
}

export default ContactList
