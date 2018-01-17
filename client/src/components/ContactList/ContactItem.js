import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const ContactItem = props => (
  <div
    className='list-group-item list-group-item-action d-flex justify-content-center contact-item'
    onClick={props.onClick}
  >
    <div className='col-md-10 col-lg-8'>{props.firstName} <b>{props.lastName}</b></div>
  </div>
)

ContactItem.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ContactItem
