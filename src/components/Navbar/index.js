import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/placeholder-logo.jpg';

function Navbar() {
  return (
    <Nav className="container-fluid border-bottom">
      <div className="row">
        <div className="col-md-2">
          <img src={Logo} alt="logo" width={150} height={150} />
        </div>
        <div className="col-md-8 text-center pt-3">
          <NavHeading className="text">Welcome To Nicholas Bhengu Theological Seminary</NavHeading>
        </div>
      </div>
    </Nav>
  );
}

const Nav = styled.div`
  padding-left: 15rem;
  background-color: #fff;
`;

const NavHeading = styled.h1`
  color: rgb(246, 255, 0);
  font-size: 3rem;
  font-weight: bold;
`;

export default Navbar;
