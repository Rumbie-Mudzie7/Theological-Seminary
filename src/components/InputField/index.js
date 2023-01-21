/* eslint-disable react/prop-types */
import React from 'react';

const InputField = ({ inputFieldName }) => (
  <div>
    <label htmlFor={`${inputFieldName}`}>{`${inputFieldName}`}</label>
    <input type="text" placeholder="Enter your name" id={`${inputFieldName}`} />
  </div>
);

export default InputField;
