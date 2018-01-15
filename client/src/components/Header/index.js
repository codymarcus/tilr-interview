import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../../actions'

const Header = (props) => (
  <div className='row justify-content-center navbar fixed-top bg-primary'>
    <input
      className='form-control col-11 col-md-6 col-lg-4'
      placeholder='Search'
      onChange={event => props.setFilter(event.target.value)}
    />
  </div>
)

const mapDispatchToProps = {
  setFilter
}

export default connect(null, mapDispatchToProps)(Header)

