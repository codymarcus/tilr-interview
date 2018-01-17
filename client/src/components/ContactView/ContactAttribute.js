import React from 'react'
import PropTypes from 'prop-types'
import ContactAttributeValue from './ContactAttributeValue'

const ContactAttribute = ({ attribute, value }) => {
  if (!value) {
    return null
  }

  return (
    <div>
      <div className='text-muted'>{attribute}</div>
      <ContactAttributeValue attribute={attribute} value={value} />
    </div>
  )
}

ContactAttribute.propTypes = {
  attribute: PropTypes.string.isRequired,
  value: PropTypes.string
}

ContactAttribute.defaultProps = {
  value: null
}

export default ContactAttribute
