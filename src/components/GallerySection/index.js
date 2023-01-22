/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import Pics1 from '../../assets/school4.jpg';
import Pics2 from '../../assets/school5.jpg';
import Pics3 from '../../assets/school6.jpg';

function Gallery() {
  return (
    <>
      <Main>
        <Heading className="text-center pt-5">Gallery</Heading>
        <div className=" container d-flex">
          <div className="row col-12">
            <img className="col-4 p-4" src={Pics1} alt="gallery-section" />
            <img className="col-4 p-4" src={Pics2} alt="gallery-section" />
            <img className="col-4 p-4" src={Pics3} alt="gallery-section" />
          </div>
        </div>

        <div className=" container d-flex">
          <div className="row col-12">
            <img className="col-4 p-4" src={Pics1} alt="gallery-section" />
            <img className="col-4 p-4" src={Pics2} alt="gallery-section" />
            <img className="col-4 p-4" src={Pics3} alt="gallery-section" />
          </div>
        </div>

        <div className=" container d-flex">
          <div className="row col-12">
            <img className="col-4 p-4" src={Pics1} alt="gallery-section" />
            <img className="col-4 p-4" src={Pics2} alt="gallery-section" />
            <img className="col-4 p-4" src={Pics3} alt="gallery-section" />
          </div>
        </div>

        <div className=" container d-flex">
          <div className="row col-12">
            <img className="col-4 p-4" src={Pics1} alt="gallery-section" />
            <img className="col-4 p-4" src={Pics2} alt="gallery-section" />
            <img className="col-4 p-4" src={Pics3} alt="gallery-section" />
          </div>
        </div>
      </Main>

    </>

  );
}

const Main = styled.main`
background-color: #EFEFEF;
`;

const Heading = styled.h1`
color: red;
`;

export default Gallery;
