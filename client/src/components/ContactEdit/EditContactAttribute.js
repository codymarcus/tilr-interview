import React from 'react'
import { connect } from 'react-redux'
import { setEditContactAttributeValue } from '../../actions'

const EditContactAttribute = (props) => {
  if (!props.attribute) {
    return null
  }

  return (
    <div className='form-group'>
      <label>{props.label}</label>
      <input
        className='form-control'
        value={props.value}
        onChange={event => props.setEditContactAttributeValue(props.attribute, event.target.value)}
      />
    </div>
  )
}

const mapDispatchToProps = {
  setEditContactAttributeValue
}

export default connect(null, mapDispatchToProps)(EditContactAttribute)
