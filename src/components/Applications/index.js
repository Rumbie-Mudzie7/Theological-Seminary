import React from 'react';
import styled from 'styled-components';
import SampleFile from '../../sampleFile.pdf';
import Principal from '../../assets/principle.JPG';

function AppSection() {
  return (
    <>
      <Wrapper>
        <ClickWrapper className="container-fluid col-12 col-md-5">
          <a
            href={SampleFile}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <Bell className="fa fa-download" aria-hidden="true" />
          </a>
          <ClickHeading className="pb-3">
            Applications for 2023 are still open
          </ClickHeading>
          <Button2 type="button" className="btn pull-right w-50">
            Click here
          </Button2>
        </ClickWrapper>
      </Wrapper>
      <VerseWrapper className="container d-flex">
        <img src={Principal} alt="principal" width={300} height={400} />
        <Message className="">
          <h1>Principal Message</h1>
          <p>
            As some of you might know, our modus operandi is training
            theological or Bible students by extension. This means that our
            school goes where people are, as opposed to asking students to come
            where the school is. In the past years we have been able to reach
            places outside South Africa, like Swaziland, Mozambique; as well as
            regions inside our country, like South Coast of KZN, North Coast of
            KZN, Zululand, Giyani in Limpopo, Port Elizabeth and East London in
            the Eastern Cape as well as Cape Town in the Western Cape. We thank
            the Lord that in the last quarter of 2017 we were able to open a
            base for students in the Transkei, one of the biggest regions in the
            Eastern Cape. We conducted classes in the beautiful town of Mthata.
            It was like a culmination of our dreams. The school had come full
            circle; because it was around this place where people who had
            congregated in a tent meeting first heard the Reverend Nicholas
            Bhengu make a call for donations to be made towards the start of a
            Bible School; long back in 1963.
          </p>
          <p className="pt-3">
            In the year 2020, we believe that the Lord has more surprises for
            us. We shall keep our ears and eyes open; also our knees bent; with
            expectation. We invite you the reader to join hands with us and
            watch as our Lord and Saviour Jesus Christ catapults us into heights
            and distances we have never experienced before. Please find the
            application the list of venues where classes will be conducted; as
            well as the list of courses offered in this prospectus and in the
            website of the school. Complete the forms and send them in as soon
            as possible. Come along! May GodU+0060s grace empower, direct and
            strengthen you on this journey as it has on ours. As the NBTS, we
            know beyond a shadow of doubt that you will reach your full
            potential in Christ as you commit to discovering GodU+0060s destiny for
            your life through Nicholas Bhengu Theological Seminary.
          </p>
        </Message>
      </VerseWrapper>
    </>
  );
}

const Wrapper = styled.div`
  padding-top: 6rem;
`;
const VerseWrapper = styled.div`
  padding-top: 7rem;
`;
const ClickWrapper = styled.div`
  background-color: #fff;
  padding: 5rem;
`;
const ClickHeading = styled.h1`
  color: red;
`;
const Bell = styled.i`
  cursor: pointer;
  font-size: 3rem;
  color: #000;
`;
const Button2 = styled.button`
  background-color: rgb(246, 255, 0);
  font-size: 1.2rem;
  font-weight: 500;
  border: 1px solid black;
`;
const Message = styled.div`
  padding-left: 8rem;
`;
export default AppSection;
