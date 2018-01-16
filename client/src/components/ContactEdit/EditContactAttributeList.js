import React from 'react'
import EditContactAttribute from './EditContactAttribute'

const labels = {
  firstName: 'first name',
  lastName: 'last name',
  company: 'company',
  address: 'address',
  phone: 'phone',
  email: 'email'
}

const EditContactAttributeList = ({ contact }) =>
  Object.keys(labels).map(attr =>
    <EditContactAttribute
      key={attr}
      label={labels[attr]}
      attribute={attr}
      value={contact[attr] || ''}
    />
  )

  export default EditContactAttributeList
