import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        This is a home page.
        <button><Link to="/about">About us</Link></button>
        <button><Link to="/contact">Contact us</Link></button>
    </div>
  )
}

export default Home
