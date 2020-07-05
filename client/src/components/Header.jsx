import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => (
  <ul className='nav' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
    <li className='nav-item'>
      <Link to='/'>Home</Link>
    </li>
    <li className='nav-item'>
      <Link to='/other'>Other Page</Link>
    </li>
  </ul>
)