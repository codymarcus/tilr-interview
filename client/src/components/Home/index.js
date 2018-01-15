import React from 'react'
import Header from '../Header'
import ContactList from '../ContactList'
import ContactPanel from '../ContactPanel'
import './style.css'

const Home = () => (
  <div className='home'>
    <Header />
    <ContactList />
    <ContactPanel />
  </div>
)

export default Home
