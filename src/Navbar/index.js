import React from 'react';
import Logo from '../assets/placeholder-logo.jpg';

function Navbar() {
  return (
    <div className="container d-flex">
      <img src={Logo} alt="logo" width={100} height={100} />
      <h1 className="text">Welcome To Nicholas Bhengu Theological Seminary</h1>
    </div>
  );
}

export default Navbar;
