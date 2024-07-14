import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return <div className="navbar d-flex justify-content-center mb-4">
  <ul className="nav nav-underline">
    <li className="nav-item">
      <Link to='/all' className="nav-link" href="#">ALL</Link>
    </li>
    <li className="nav-item">
      <Link to='/fullstackdevelopment' className="nav-link" href="#">FULL STACK DEVELOPMENT</Link>
    </li>
    <li className="nav-item">
      <Link to='/datascience' className="nav-link" href="#">DATA SCIENCE</Link>
    </li>
    <li className="nav-item">
      <Link to='cybersecurity' className="nav-link" href='#'>CYBER SECURITY</Link>
    </li>
    <li className="nav-item">
      <Link to='career' className="nav-link" href='#'>CAREER</Link>
    </li>
  </ul>
</div>
}

export default Navbar