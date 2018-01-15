import React from 'react'
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

export default ContactAttribute
