import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/placeholder-logo.jpg';

function Navbar() {
  return (
    <Nav className="container d-flex">
      <img src={Logo} alt="logo" width={100} height={100} />
      <NavHeading className="text">Welcome To Nicholas Bhengu Theological Seminary</NavHeading>
    </Nav>
  );
}

const Nav = styled.div`

`;

const NavHeading = styled.h1`
  color: rgb(246, 255, 0);
`;

export default Navbar;
