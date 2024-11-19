import React from 'react'
import { Link } from 'react-router-dom'
function About() {
  return (
    <div>
        This is an about page.
        <button><Link to="/">Home</Link></button>
        <button><Link to="/contact">Contact us</Link></button>
    </div>
  )
}

export default About
