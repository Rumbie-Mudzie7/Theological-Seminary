import React from 'react';
import styled from 'styled-components';

function LeftInfo() {
  return (
    <Wrapper className="pt-3">
      <a href="#info-section1"><Button type="button" className="btn w-50">ABOUT US</Button></a>
      <a href="#info-section2"><Button type="button" className="btn w-50">FEES</Button></a>
      <a href="#info-section3"><Button type="button" className="btn w-50">FORMS</Button></a>
      <a href="#info-section4"><Button type="button" className="btn w-50">LIBRARY</Button></a>
      <a href="#info-section5"><Button type="button" className="btn w-50">CONTACT INFO</Button></a>
      <a href="#info-section6"><Button type="button" className="btn w-50">EVENTS</Button></a>
      <Bell className="fa fa-bell" aria-hidden="true" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  background-color: red;
  color: #fff;
  margin: 1rem;
  font-weight: bold;

  .btn:hover{
    background-color: rgb(242, 242, 41);;
  }
`;
const Bell = styled.i`
  cursor: pointer;
  font-size: 2rem;
  color: #000;
  margin-left: 8rem;
`;

export default LeftInfo;
