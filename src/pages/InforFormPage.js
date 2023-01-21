import React from 'react';
import InputField from '../components/InputField/index';
import InfoPageHeader from '../components/InfoPageHeader/index';

const InforFormPage = () => (
  <div className="container">
    <InfoPageHeader />
    <form>
      <InputField inputFieldName="Tittle" />
      <InputField inputFieldName="Surname" />
      <InputField inputFieldName="Full Name" />
    </form>
  </div>
);

export default InforFormPage;
