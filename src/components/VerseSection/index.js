import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

const VerseWrapper = styled.div`
  padding-top: 7rem;
`;
const StyledPartnersCarousel = styled.div`
    background: #dddddd;
    .carousel {
        .carousel-indicators {
            margin-bottom: 0;
            bottom: -2rem;
        }
    }
`;

const StyledPartners = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    align-items: center;
`;

const StyledPartnerItem = styled.div`
    width: 240px;
    height: 100px;
    img {
        object-fit: cover;
        object-position: center;
        height: 100%;
    }
`;

const VerseSection = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <VerseWrapper>
      <StyledPartnersCarousel className="section-wrapper">
        <div className="container">
          <div className="section-content">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <StyledPartners>
                  <StyledPartnerItem>
                    <p className="d-block w-100" loading="lazy">
                      Hosea 4:6(King James Version) - My people are destroyed for lack of knowledge
                    </p>
                  </StyledPartnerItem>
                  <StyledPartnerItem>
                    <p className="d-block w-100" loading="lazy">
                      Hosea 4:6(King James Version) - My people are destroyed for lack of knowledge
                    </p>
                  </StyledPartnerItem>
                  <StyledPartnerItem>
                    <p className="d-block w-100" loading="lazy">
                      Hosea 4:6(King James Version) - My people are destroyed for lack of knowledge
                    </p>
                  </StyledPartnerItem>
                  <StyledPartnerItem>
                    <p className="d-block w-100" loading="lazy">
                      Hosea 4:6(King James Version) - My people are destroyed for lack of knowledge
                    </p>
                  </StyledPartnerItem>
                </StyledPartners>
              </Carousel.Item>
              <Carousel.Item>
                <StyledPartners>
                  <StyledPartnerItem>
                    <p className="d-block w-100" loading="lazy">
                      Hosea 4:6(King James Version) - My people are destroyed for lack of knowledge
                    </p>
                  </StyledPartnerItem>
                  <StyledPartnerItem>
                    <p className="d-block w-100" loading="lazy">
                      Hosea 4:6(King James Version) - My people are destroyed for lack of knowledge
                    </p>
                  </StyledPartnerItem>
                  <StyledPartnerItem>
                    <p className="d-block w-100" loading="lazy">
                      Hosea 4:6(King James Version) - My people are destroyed for lack of knowledge
                    </p>
                  </StyledPartnerItem>
                  <StyledPartnerItem>
                    <p className="d-block w-100" loading="lazy">
                      Hosea 4:6(King James Version) - My people are destroyed for lack of knowledge
                    </p>
                  </StyledPartnerItem>
                </StyledPartners>
              </Carousel.Item>
              <Carousel.Item>
                <StyledPartners>
                  <StyledPartnerItem>
                    <p className="d-block w-100" loading="lazy">
                      Hosea 4:6(King James Version) - My people are destroyed for lack of knowledge
                    </p>
                  </StyledPartnerItem>
                  <StyledPartnerItem>
                    <p className="d-block w-100" loading="lazy">
                      Hosea 4:6(King James Version) - My people are destroyed for lack of knowledge
                    </p>
                  </StyledPartnerItem>
                  <StyledPartnerItem>
                    <p className="d-block w-100" loading="lazy">
                      Hosea 4:6(King James Version) - My people are destroyed for lack of knowledge
                    </p>
                  </StyledPartnerItem>
                  <StyledPartnerItem>
                    <p className="d-block w-100" loading="lazy">
                      Hosea 4:6(King James Version) - My people are destroyed for lack of knowledge
                    </p>
                  </StyledPartnerItem>
                </StyledPartners>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </StyledPartnersCarousel>
    </VerseWrapper>
  );
};

export default VerseSection;
