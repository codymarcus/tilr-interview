import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setFilter, setIsCreating } from '../../actions'
import './style.css'

const Header = props => (
  <div className='row justify-content-center navbar fixed-top bg-primary'>
    <div className='row col-lg-8 justify-content-md-center'>
      <input
        className='form-control col-9 col-md-6'
        placeholder='Search'
        onChange={event => props.setFilter(event.target.value)}
      />
      <button
        className='btn btn-light new-button'
        onClick={() => props.setIsCreating(true)}
      >
        New
      </button>
    </div>
  </div>
)

Header.propTypes = {
  setFilter: PropTypes.func.isRequired,
  setIsCreating: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  setFilter,
  setIsCreating
}

export default connect(null, mapDispatchToProps)(Header)
