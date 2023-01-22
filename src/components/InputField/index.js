/* eslint-disable react/prop-types */
import React from 'react';

const InputField = ({ inputFieldId, inputFieldType, inputFieldName }) => (
  <div>
    <label htmlFor={`${inputFieldId}`}>{`${inputFieldName}`}</label>
    <input type={`${inputFieldType}`} id={`${inputFieldId}`} />
  </div>
);

export default InputField;
