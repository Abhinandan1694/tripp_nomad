import "./destination.css";
import React from "react";
import Img2 from "../assets/img2.jpg";
import Img12 from "../assets/img12.jpg";
import Img15 from "../assets/img15.jpg";
import Img16 from "../assets/img16.jpg";
import DescriptionData from "../Components/DescriptionData";

const Destination = () => {
  return (
    <React.Fragment>
      <div className="destination">
        <h1>Popular Destinations</h1>
        <p>Tours give you an opportunity to see a lot, within a time frame.</p>
        <DescriptionData
          className="first-des"
          heading="Taal Volcano, Batangas"
          text="Taal Volcano is the second most active volcano found in the
        province of Batangas. A complex volcano in the middle of Taal Lake
        and is often called an island within a lake, that is an island
        within a lake that is on an island as well as one of the lowest
        volcano in the world having 311 meters elevation. It offers a very
        a spectacular view seen from Tagaytay Ridge. Taal volcano is
        located around 50 kilometers away from Manila, capital of the
        Philippines."
          img1={Img2}
          img2={Img12}
        />
        <DescriptionData
          className="first-des-reverse"
          heading="The Lake Braies, Dolomites"
          text="Lake Braies/ Lago di Braies / Pragser Wildsee is one of the most beautiful lakes in Italy.
          Located at an altitude of about 1,500 m above sea level in the picturesque 
          Alta Pusteria / Hochpustertal, the mountain lake captivates with its 
          turquoise-green colour and the imposing Seekofel massif (2,810 m) that surrounds it."
          img1={Img15}
          img2={Img16}
        />
      </div>
    </React.Fragment>
  );
};

export default Destination;
