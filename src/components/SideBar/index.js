import React from 'react';
import Principal from '../../assets/principle2.JPG';

function SideBar() {
  return (
    <div className="container pt-4">
      <img src={Principal} alt="principal" width={300} height={400} />
      <h1>Dr Jele Maganyi</h1>
      <h2>Principal</h2>
      <p>Welcoming message to encourage people about education</p>
      <p>
        As some of you might know, our modus operandi is training theological or Bible students by extension.
        This means that our school goes where people are, as opposed to asking students to come where the school is.
        In the past years we have been able to reach places outside South Africa,
        like Swaziland, Mozambique; as well as regions inside our country,
        like South Coast of KZN, North Coast of KZN, Zululand, Giyani in Limpopo,
        Port Elizabeth and East London in the Eastern Cape as well as Cape Town in the Western Cape.
        We thank the Lord that in the last quarter of 2017 we were able to open a base for students in the Transkei,
        one of the biggest regions in the Eastern Cape. We conducted classes in the beautiful town of Mthata.
        It was like a culmination of our dreams.
      </p>
    </div>
  );
}

export default SideBar;
