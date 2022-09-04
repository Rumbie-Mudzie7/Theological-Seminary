import React from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';

function Footer() {
  return (
    <>
      <Wrapper className="container-fluid bg-secondary">
        <Social className="container d-flex">
          <div className="col 12 col-md-5 pb-4">
            <Twitter className="fa fa-twitter-square px-4" aria-hidden="true" />
            <Facebook className="fa fa-facebook-square px-4" aria-hidden="true" />
            <Instagram className="fa fa-instagram px-4" aria-hidden="true" />
            <Linkedin className="fa fa-linkedin-square px-4" aria-hidden="true" />
          </div>
          <div className="col 12 col-md-3">
            <Contact>Contact Number</Contact>
            <p>+271000000000</p>
          </div>
          <div className="col 12 col-md-4">
            <Address>Physical Address</Address>
            <p>The Address</p>
          </div>
        </Social>

      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  padding-top: 4rem;
`;
const Social = styled.div`
  
`;
const Contact = styled.h5`
  color: rgb(246, 255, 0);
  font-weight: bold;
`;
const Address = styled.h5`
 color: rgb(246, 255, 0);
 font-weight: bold;
`;
const Twitter = styled.i`
  color: rgb(0, 169, 255);
  font-size: 2.8rem;
 `;

const Facebook = styled.i`
  color: rgb(10, 73, 168);
  font-size: 2.8rem;
 `;
const Instagram = styled.i`
  font-size: 2.8rem;
 `;
const Linkedin = styled.i`
  color: rgb(70, 66, 201);
  font-size: 2.8rem;
 `;

export default Footer;
