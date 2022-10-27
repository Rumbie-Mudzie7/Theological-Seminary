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

function Footer() {
  return (
    <>
      <Wrapper className="container-fluid bg-secondary p-2">
        <Social className="container d-flex">
          <div className="col 12 col-md-5 pb-5">
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
          <div className="col 12 col-md-3">
            <Contact>Contact Number</Contact>
            <p>+27163661013</p>
          </div>
          <div className="col 12 col-md-4">
            <Address>Physical Address</Address>
            <br />
            <Address2>
              <strong>
                <p>1922 Regatta Road,</p>
                <p>Henley on klip,</p>
                <p>Assemblies of God Centre,</p>
                <p>PO Box 623, Henley on Klip, SA</p>
                <a href="E-mail:nbtc.aog@gmail.com">E-mail:nbtc.aog@gmail.com</a>
              </strong>
            </Address2>
          </div>
        </Social>

      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  padding-top: 4rem;
`;
const Social = styled.div`
  
`;
const Contact = styled.h5`
  color: rgb(246, 255, 0);
  font-weight: bold;
`;
const Address = styled.h5`
  color: rgb(246, 255, 0);
  font-weight: bold;
  line-height: 0.5;
`;
const Address2 = styled.div`
  line-height: 0.5;
`;
const Twitter = styled.a`
  color: rgb(0, 169, 255);
  font-size: 2.8rem;
  padding-right: 2rem;
 `;
const Facebook = styled.a`
  color: rgb(10, 73, 168);
  font-size: 2.8rem;
  padding-right: 2rem;
 `;
const Instagram = styled.a`
  color: rgb(229, 25, 89);
  font-size: 2.8rem;
  padding-right: 2rem;
 `;
const Linkedin = styled.a`
  color: rgb(70, 66, 201);
  font-size: 2.8rem;
  padding-right: 2rem;
 `;
const Skype = styled.a`
  color: rgb(70, 66, 201);
  font-size: 2.8rem;
  padding-right: 2rem;
 `;

export default Footer;
