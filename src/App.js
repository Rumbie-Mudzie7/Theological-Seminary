import React from 'react';
import SideBar from './components/SideBar';
import Navbar from './components/Navbar';
import Galary from './components/Galary';
import Midsection from './components/Midsection';
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
            <nav className="navbar navbar-expand-lg bg-light">
              <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                  </div>
                  <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/about">About Us</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/fees">Fees</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/forms">Forms</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact Info</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/events">Events</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/library">Library</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/notifications">
                          <i className="fa fa-bell" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/download">
                          <i className="fa fa-download" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
            <div className="middleSectionContent fontStyles">
              <div>
                <Midsection />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <Galary />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
