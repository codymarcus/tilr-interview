import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setEditContactAttributeValue } from '../../actions'

const EditContactAttribute = props => (
  <div className='form-group'>
    <label>{props.label}</label>
    <input
      className='form-control'
      value={props.value}
      onChange={event => props.setEditContactAttributeValue(props.attribute, event.target.value)}
    />
  </div>
)

EditContactAttribute.propTypes = {
  attribute: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  setEditContactAttributeValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

const mapDispatchToProps = {
  setEditContactAttributeValue
}

export default connect(null, mapDispatchToProps)(EditContactAttribute)
