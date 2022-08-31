import React from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';
import SampleFile from '../../sampleFile.pdf';

function Midsection() {
  return (
    <>
      <Wrapper className="menu-section pt-3">
        <a href="#info-section1"><Button type="button" className="btn w-25">ABOUT US</Button></a>
        <a href="#info-section2"><Button type="button" className="btn w-25">FEES</Button></a>
        <a href="#info-section3"><Button type="button" className="btn w-25">FORMS</Button></a>
        <Bell className="fa fa-bell" aria-hidden="true" />
      </Wrapper>
      <Wrapper className="menu-section">
        <a href="#info-section4"><Button type="button" className="btn w-25">LIBRARY</Button></a>
        <a href="#info-section5"><Button type="button" className="btn w-25">CONTACT INFO</Button></a>
        <a href="#info-section6"><Button type="button" className="btn w-25">EVENTS</Button></a>
        <a href={SampleFile} target="_blank" rel="noopener noreferrer" download>
          <Bell className="fa fa-download" aria-hidden="true" />
        </a>
      </Wrapper>
      <ClickWrapper>
        <ClickHeading className="pb-3">Applications for 2023 are still open</ClickHeading>
        <Button2 type="button" className="btn pull-right w-25">Click here</Button2>
      </ClickWrapper>
      <div className="col-12 d-flex">
        <div className="col-md-1 pt-5">
          <Twitter className="fa fa-twitter-square" aria-hidden="true" />
          <Facebook className="fa fa-facebook-square" aria-hidden="true" />
          <Instagram className="fa fa-instagram" aria-hidden="true" />
          <Linkedin className="fa fa-linkedin-square" aria-hidden="true" />
        </div>
        <div className="col-md-10 pt-5">
          <p>Some text for posts here</p>
          <p>Some text for posts here</p>
          <p>Some text for posts here</p>
        </div>
      </div>
      <div className="pt-5">
        <p>Hosea 4:6(King James Version) - My people are destroyed for lack of knowledge</p>
      </div>
    </>
  );
}

const Wrapper = styled.div`

`;

const ClickWrapper = styled.div`
 padding: 5rem;
`;
const ClickHeading = styled.h1`
  color: red;
`;
const Button = styled.button`
  background-color: red;
  color: #fff;
  margin: 1rem;
  font-weight: bold;

  .btn:hover{
    color: rgb(255, 255, 255);
  }
`;

const Bell = styled.i`
  cursor: pointer;
  font-size: 2rem;
  color: #000;
`;

const Button2 = styled.button`
  background-color: rgb(246, 255, 0);
  font-size: 1.2rem;
  font-weight: 500;
  border: 1px solid black;
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

export default Midsection;
