import React, { useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import Banner from "./component/Banner/Banner";
import RatingBanner from "./component/Banner/RatingBanner";
import Banner3 from "./component/Banner/Banner3";
import Tab from "./component/Tab/Tab";
import MidContainer from "./component/Tab/Mid/MidContainer";
import Midlast from "./component/MidLast/Midlast";
import FooterFirst from "./component/Footer/FooterFirst";
import FooterLast from "./component/Footer/FooterLast";

const A1 = () => {
  const [info, setI] = useState([]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar info={info} />
      <Banner />
      <RatingBanner />
      <Banner3 />
      <Tab info={info} setI={setI} />
      <MidContainer /> {/* Get Started In 3 Steps */}
      <Midlast />      {/* Pricing Section */}
      <FooterFirst />  {/* Ready to Transform Section */}
      <FooterLast />   {/* Bottom Footer */}
    </div>
  );
};

export default A1;