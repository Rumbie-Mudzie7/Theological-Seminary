import React from 'react';
import SideBar from './components/SideBar';
import Navbar from './components/Navbar';
import Galary from './components/Galary';
import Midsection from './components/Midsection';
import LeftInfo from './components/InfoSection';
import './main.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
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
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-4">
            <LeftInfo />
          </div>
          <div className="col-12 col-md-8" />
        </div>
      </div>
    </>
  );
}

export default App;
