import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/nbts-logo.png';
import Logo2 from '../../assets/africa-logo.png';
import './Navbar.module.scss';

function Navbar() {
  return (
    <Nav className="container-fluid border-bottom">
      <div className="row">
        <FirstDiv className="col-md-2">
          <img src={Logo} alt="logo" id="logo" width={120} height={120} />
        </FirstDiv>
        <div className="nav col-md-8 text-center">
          <NavHeading className="text">Welcome To Nicholas Bhengu Theological Seminary</NavHeading>
        </div>
        <SecondDiv className="nav col-md-2">
          <img src={Logo2} alt="logo" width={130} height={120} />
        </SecondDiv>
      </div>
    </Nav>
  );
}

const Nav = styled.div`
  background-color: #fff;
`;

const FirstDiv = styled.div`
  padding-left: 4rem;
  @keyframes swing {
    0%, 100% { transform: rotate(-30deg); }
    20% {transform:scale(.95);}
    50% { transform: rotate(30deg); }
    80% {transform:scale(.95);}
  }

  #logo {
    animation: swing 2s infinite ease-in-out;
  }
`;

const SecondDiv = styled.div`
`;

const NavHeading = styled.h1`
  position: relative;
  top: 12px;
  right: 50px;
  color: #0B69AE;
  font-size: 2.8rem;
  font-weight: bold;
`;

export default Navbar;
