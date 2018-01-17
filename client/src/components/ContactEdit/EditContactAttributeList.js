import React from 'react'
import PropTypes from 'prop-types'
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

EditContactAttributeList.propTypes = {
  contact: PropTypes.object.isRequired
}

export default EditContactAttributeList
