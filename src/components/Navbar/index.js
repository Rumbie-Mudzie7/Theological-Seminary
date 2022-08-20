import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/placeholder-logo.jpg';

function Navbar() {
  return (
    <Nav className="container-fluid border-bottom">
      <div className="row">
        <div className="col-md-2">
          <img src={Logo} alt="logo" width={100} height={100} />
        </div>
        <div className="col-md-8 text-center">
          <NavHeading className="text">Welcome To Nicholas Bhengu Theological Seminary</NavHeading>
        </div>
      </div>
    </Nav>
  );
}

const Nav = styled.div`

`;

const NavHeading = styled.h1`
  color: rgb(246, 255, 0);
`;

export default Navbar;
