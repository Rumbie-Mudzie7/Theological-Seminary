import React from 'react';
import Pics1 from '../../assets/school4.JPG';
import Pics2 from '../../assets/school5.JPG';
import Pics3 from '../../assets/school6.JPG';

function Gallery() {
  return (
    <>
      <h1 className="text-center pt-5">Gallery</h1>
      <div className=" container d-flex">
        <div className="p-4">
          <img src={Pics1} alt="gallery-section" width={400} height={300} />
        </div>
        <div className="p-4">
          <img src={Pics2} alt="gallery-section" width={400} height={300} />
        </div>
        <div className="p-4">
          <img src={Pics3} alt="gallery-section" width={400} height={300} />
        </div>
      </div>
    </>

  );
}

export default Gallery;
