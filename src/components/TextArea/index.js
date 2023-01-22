/* eslint-disable react/prop-types */
import React from 'react';

const TextArea = ({ textAreaID, textAreaTitle }) => (
  <div>
    <label htmlFor={`${textAreaID}`}>{`${textAreaTitle}`}</label>
    <textarea id={`${textAreaID}`} />
  </div>
);

export default TextArea;
