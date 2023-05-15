import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <Link to='/'>Home</Link>
      <Link to='/homeBad'>Home Bad</Link>
      <Link to='/profileBad'>Profile Bad</Link>
      <Link to='/homeGood'>Home Good</Link>
      <Link to='/profileGood'>Profile Good</Link>
      <Link to='/contact'>Contact</Link>
    </>
  )
}

export default Navbar