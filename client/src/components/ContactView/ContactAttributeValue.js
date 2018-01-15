import React from 'react'

const ContactAttributeValue = ({ attribute, value }) => {
  if (attribute === 'email') {
    return <a className='card-link' href={`mailto:${value}`}>{value}</a>
  }
  if (attribute === 'address') {
    return <a className='card-link' target='_blank' href={`http://www.google.com/maps/place/${value.replace(' ', '+')}`}>{value}</a>
  }
  if (attribute === 'phone') {
    return <a className='card-link' href={`tel:${value}`}>{value}</a>
  }
  return <div>{value}</div>
}

export default ContactAttributeValue
