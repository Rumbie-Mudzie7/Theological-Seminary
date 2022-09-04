import React from 'react';
import styled from 'styled-components';
import SideBar from './components/SideBar';
import Navbar from './components/Navbar';
import Galary from './components/Galary';
import Midsection from './components/Midsection';
import LeftInfo from './components/InfoSection/menu';
import RightInfo from './side';
import './main.css';
import AppSection from './components/Applications';
import VerseSection from './components/VerseSection';
import Gallery from './components/GallerySection';

function App() {
  return (
    <>
      <Navbar />
      <MidSection className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-3">
            <SideBar />
          </div>
          <div className="col-12 col-md-6">
            <Midsection />
          </div>
          <div className="col-12 col-md-3">
            <Galary />
          </div>
        </div>
      </MidSection>
      <VerseWrapper className="container-fluid pt-5">
        <div className="row">
          <div className="col-12 col-md-4">
            <LeftInfo />
          </div>
          <div className="col-12 col-md-8">
            <RightInfo />
          </div>
        </div>
      </VerseWrapper>
      <AppSection />
      <VerseSection />
      <Gallery />
    </>
  );
}

const MidSection = styled.div`
  background-color: #EFEFEF;
`;
const VerseWrapper = styled.div`
  padding-top: 7rem;
`;

export default App;
