import React from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';

function Midsection() {
  return (
    <>
      <div>
        <h1>Applications for 2023 are still open</h1>
        <Button2 type="button" className="btn pull-right">Click here</Button2>
      </div>
      <div className="col-md-1">
        <Twitter className="fa fa-twitter-square" aria-hidden="true" />
        <Facebook className="fa fa-facebook-square" aria-hidden="true" />
        <Instagram className="fa fa-instagram" aria-hidden="true" />
        <Linkedin className="fa fa-linkedin-square" aria-hidden="true" />
      </div>
      <div>
        <p>Hosea 4:6(King James Version) - My people are destroyed for lack of knowledge</p>
      </div>
    </>
  );
}

// const Wrapper = styled.div`

// `;
// const Button = styled.button`
//   background-color: red;
//   color: #fff;
//   margin: 1rem;
//   font-weight: bold;

//   .btn:hover{
//     color: rgb(255, 255, 255);
//   }
// `;

// const Bell = styled.i`
//   cursor: pointer;
//   font-size: 2rem;
// `;

const Button2 = styled.button`
  background-color: rgb(246, 255, 0);
  font-size: 1.2rem;
  font-weight: 500;
  border: 1px solid black;
 `;

const Twitter = styled.i`
  color: rgb(0, 169, 255);
  font-size: 2.5rem;
 `;

const Facebook = styled.i`
  color: rgb(10, 73, 168);
  font-size: 2.5rem;
 `;
const Instagram = styled.i`
  font-size: 2.5rem;
 `;
const Linkedin = styled.i`
  color: rgb(70, 66, 201);
  font-size: 2.5rem;
 `;

export default Midsection;
