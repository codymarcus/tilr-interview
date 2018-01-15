import React from 'react'

const ContactItem = (props) => (
  <div
    className='list-group-item list-group-item-action d-flex justify-content-center'
    onClick={props.onClick}
  >
    <div className='col-12 col-md-11'>{props.firstName} <b>{props.lastName}</b></div>
  </div>
)

export default ContactItem
