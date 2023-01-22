import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/nbts-logo.png';
import Logo2 from '../../assets/africa-logo.png';
import style from '../../assets/scss/navbar.module.scss';

function Navbar() {
  return (
    <Nav className="container border-bottom">
      <div className={`row ${style.topNavbar}`}>
        <FirstDiv className="col-4 col-md-2">
          <img src={Logo} alt="logo" id="logo" className={`${style.logo} w-100 img-fluid`} />
        </FirstDiv>
        <div className={`${style.nav1} m-auto col-4 col-md-8 d-flex text-center align-items-center`}>
          <NavHeading>Welcome To Nicholas Bhengu Theological Seminary</NavHeading>
        </div>
        <SecondDiv className="col-4 col-md-2">
          <img src={Logo2} alt="logo" className={`${style.logo} w-100 img-fluid`} />
        </SecondDiv>
      </div>
    </Nav>
  );
}

const Nav = styled.div`
  background-color: #fff;
`;

const FirstDiv = styled.div`
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
  color: #0B69AE;
  font-size: 2.8rem;
  font-weight: bold;
`;

export default Navbar;
