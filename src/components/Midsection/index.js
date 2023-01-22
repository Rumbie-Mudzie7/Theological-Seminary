import React from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faSkype,
} from '@fortawesome/free-brands-svg-icons';
import SampleFile from '../../sampleFile.pdf';
import style from '../../assets/scss/midsection.module.scss';

function Midsection() {
  return (
    <div className="container">
      <div className="row">
        <div className="buttons col-sm-12">
          <div className="menu-section pt-3">
            <a href="#info-section1"><Button type="button" className={`btn ${style.btnComponent} w-25`}>ABOUT</Button></a>
            <a href="#info-section2"><Button type="button" className={`btn ${style.btnComponent} w-25`}>FEES</Button></a>
            <a href="#info-section3"><Button type="button" className={`btn ${style.btnComponent} w-25`}>FORMS</Button></a>
            <Bell className="fa fa-bell" aria-hidden="true" />
          </div>
          <div className="menu-section">
            <a href="#info-section4"><Button type="button" className={`btn ${style.btnComponent} w-25`}>LIBRARY</Button></a>
            <a href="#info-section5"><Button type="button" className={`btn ${style.btnComponent} w-25`}>CONTACT</Button></a>
            <a href="#info-section6"><Button type="button" className={`btn ${style.btnComponent} w-25`}>EVENTS</Button></a>
            <a href={SampleFile} target="_blank" rel="noopener noreferrer" download>
              <Bell className="fa fa-download" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="col-sm-12 mt-5 px-3">
          <ClickHeading>Applications for 2023 are still open</ClickHeading>
          <Button2 type="button" className="btn pull-left w-50 mt-3">Click here</Button2>
        </div>

        <div className="col-12 container mt-5">
          <div className="row">
            <div className="col-sm-12 col-md-5 d-flex align-items-center py-2">
              <Twitter href="https://twitter.com/NbtsAog">
                <FontAwesomeIcon icon={faTwitter} />
              </Twitter>
              <Facebook href="https://web.facebook.com/Nicholas-Bhengu-Theological-Seminary-106268578893146">
                <FontAwesomeIcon icon={faFacebook} />
              </Facebook>
              <Instagram href="https://Instagram.com/nbts">
                <FontAwesomeIcon icon={faInstagram} />
              </Instagram>
              <Linkedin href=" https://www.linkedin.com/in/Nicholas-bhegu-22a59024b">
                <FontAwesomeIcon icon={faLinkedin} />
              </Linkedin>
              <Skype href="https://twitter.com/NbtsAog">
                <FontAwesomeIcon icon={faSkype} />
              </Skype>
            </div>
            <Posts className="col-sm-12 col-md-7">
              <p>Some text for posts here</p>
              <p>Some text for posts here</p>
              <p>Some text for posts here</p>
            </Posts>
            <div className="col-sm-12 py-4">
              <p>Hosea 4:6(King James Version) - My people are destroyed for lack of knowledge</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// const ClickWrapper = styled.div`
//  padding: 5rem;
// `;

const ClickHeading = styled.h1`
  color: red;
`;
const Button = styled.button`
  background-color: red;
  color: #fff;
  margin-right: 1rem;
  font-weight: bold;
`;

const Bell = styled.i`
  cursor: pointer;
  font-size: 2rem;
  color: #000;
`;

const Button2 = styled.button`
  background-color: rgb(246, 255, 0);
  font-size: 1.2rem;
  font-weight: 500;
  border: 1px solid black;
 `;

const Twitter = styled.a`
  color: rgb(0, 169, 255);
  font-size: 2rem;
  padding: 0 .3rem;
 `;
const Facebook = styled.a`
  color: rgb(10, 73, 168);
  font-size: 2rem;
  padding: 0 .3rem;
 `;
const Instagram = styled.a`
  color: rgb(229, 25, 89);
  font-size: 2rem;
  padding: 0 .3rem;
 `;
const Linkedin = styled.a`
  color: rgb(70, 66, 201);
  font-size: 2rem;
  padding: 0 .3rem;
 `;
const Skype = styled.a`
  color: rgb(70, 66, 201);
  font-size: 2rem;
  padding: 0 .3rem;
 `;
const Posts = styled.div`
  color: red;
  // padding-top: 170px;
  // padding-left: 160px;
 `;

export default Midsection;
