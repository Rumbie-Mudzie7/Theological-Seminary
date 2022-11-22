import React from 'react';
import styled from 'styled-components';
import Principal from '../../assets/principle2.JPG';

function SideBar() {
  return (
    <div className="container pt-4">
      <img src={Principal} alt="principal" width={300} height={400} />
      <h1>Dr Jele Maganyi</h1>
      <h2>Principal</h2>
      <p>
        As some of you might know, our modus operandi is training theological or
        Bible students by extension. This means that our school goes where
        people are, as opposed to asking students to come where the school is.
      </p>
      <Button2 type="button" className="btn w-50">Read More</Button2>
    </div>
  );
}

const Button2 = styled.button`
  background-color: rgb(246, 255, 0);
  font-size: 1.2rem;
  font-weight: 500;
  border: 1px solid black;
 `;

export default SideBar;
