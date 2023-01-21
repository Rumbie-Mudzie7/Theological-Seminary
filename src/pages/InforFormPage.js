import React from 'react';
import InputField from '../components/InputField/index';

const InforFormPage = () => (
  <div className="container">
    <h1>Information Form</h1>
    <form>
      <InputField inputFieldName="FirstName" />
    </form>
  </div>
);

export default InforFormPage;
