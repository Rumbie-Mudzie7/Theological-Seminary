import React from 'react';
import Principal from '../../assets/principle1.jpg';

function SideBar() {
  return (
    <div className="pt-4">
      <img src={Principal} alt="principal" width={300} height={200} />
      <h1>Dr Jele Maganyi</h1>
      <h2>Principal</h2>
      <p>Welcoming message to encourage people about education</p>
    </div>
  );
}

export default SideBar;
