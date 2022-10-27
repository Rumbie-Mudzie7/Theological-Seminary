import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/placeholder-logo.jpg';
import './Navbar.module.scss';

function Navbar() {
  return (
    <Nav className="container-fluid border-bottom">
      <div className="row">
        <div className="nav col-md-2">
          <img src={Logo} alt="logo" width={130} height={130} />
        </div>
        <div className="nav col-md-10 text-center">
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
  position: relative;
  top: 12px;
  right: 50px;
  color: rgb(246, 255, 0);
  font-size: 2.8rem;
  font-weight: bold;
`;

export default Navbar;
