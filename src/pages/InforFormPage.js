import React from 'react';
import InputField from '../components/InputField';
import InfoPageHeader from '../components/InfoPageHeader';
import TextArea from '../components/TextArea';

const InforFormPage = () => (
  <div className="container">
    <InfoPageHeader />
    <form>
      <InputField inputFieldName="Tittle" />
      <InputField inputFieldName="Surname" />
      <InputField inputFieldName="Full Name" />
      <TextArea textAreaID="address" textAreaTitle="Home Address" />
    </form>
  </div>
);

export default InforFormPage;
