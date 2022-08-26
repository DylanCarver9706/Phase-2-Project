import React from 'react';


function Navbar () {

  return (
    <section className="navbar">
      <a href="/" className="navbar-item">Home</a>
      <a href="/about" className="navbar-item">About</a>
      <a href="/shop" className="navbar-item">Shop</a>
      <a href="https://danielarisa.com/" className="navbar-item">Blog</a>
      <a href="/contact" className="navbar-item">Contact</a>
  </section>
  )

}

export default Navbar;