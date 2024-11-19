import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div>
        This is a contact page.
        <button><Link to="/">Home</Link></button>
        <button><Link to="/about">About us</Link></button>
    </div>
  )
}

export default Contact
