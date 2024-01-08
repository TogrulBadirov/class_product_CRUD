import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <Link to="/">Home </Link>
    <Link to="/add-product">Add_Product</Link>
    </>
  )
}

export default Navbar