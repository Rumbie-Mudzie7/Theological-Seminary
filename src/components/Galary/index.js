import React from 'react';
import styled from 'styled-components';
import school1 from '../../assets/school1.JPG';
import school8 from '../../assets/school8.JPG';
import school3 from '../../assets/school3.JPG';
import school5 from '../../assets/school5.JPG';

const Galary = () => {
  const images = [school1, school8, school3, school5];

  return (
    <div className="container pt-3">
      <div className="row">
        <div className="d-flex justify-content-center">
          <a href="#info-section1"><Button type="button" className="btn">GALLERY</Button></a>
        </div>
        <div className="col-12 pt-2">
          {
                        images.map((image) => (
                          <img
                            key={(Math.random() * images.length) + 1}
                            src={`${image}`}
                            alt="galary"
                            className="p-2 w-100"
                            // width={300}
                            // height={200}
                          />
                        ))
                    }
        </div>
      </div>
    </div>
  );
};

const Button = styled.button`
  background-color: red;
  color: #fff;
  margin: 1rem;
  font-weight: bold;
  width: 10rem;
`;

export default Galary;
