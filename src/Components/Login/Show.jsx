import React from "react";
import one from "../Images/original (6).jpg";
import one2 from "../Images/original (9).jpg";
import one3 from "../Images/original (10).jpg";
import two from "../Images/original (18).jpg";
import two2 from "../Images/original (5).jpg";
import two3 from "../Images/original (13).jpg";
import three from "../Images/original (7).jpg";
import three2 from "../Images/original (2).jpg";
import three3 from "../Images/original (14).jpg";
import four from "../Images/original (19).jpg";
import four2 from "../Images/original (3).jpg";
import four3 from "../Images/original (11).jpg";
import five from "../Images/original (4).jpg";
import five2 from "../Images/original (16).jpg";
import five3 from "../Images/original (15).jpg";
import six from "../Images/original (8).jpg";
import six2 from "../Images/original (12).jpg";
import six3 from "../Images/original (17).jpg";

const Show = () => {
  return (
    <div className="center-f">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <span className="tab-links kld">TRENDING</span>
        <span className="tab-links">NEW ON DISNEY+</span>
        <span className="tab-links">COMING SOON</span>
      </div>

      <div className="tab-contents pg active-tab">
        <ul className="grid ">
          <li>
            <img src={one} alt="thor" />
          </li>

          <li>
            <img src={two} alt="thor" />
          </li>

          <li>
            <img src={three} alt="thor" />
          </li>

          <li>
            <img src={four} alt="thor" />
          </li>

          <li>
            <img src={five} alt="thor" />
          </li>

          <li>
            <img src={six} alt="thor" />
          </li>
        </ul>
      </div>

      <div className="tab-contents pg ">
        <ul className="grid">
          <li>
            <img src={one2} alt="thor" />
          </li>

          <li>
            <img src={two2} alt="thor" />
          </li>

          <li>
            <img src={three2} alt="thor" />
          </li>

          <li>
            <img src={four2} alt="thor" />
          </li>

          <li>
            <img src={five2} alt="thor" />
          </li>

          <li>
            <img src={six2} alt="thor" />
          </li>
        </ul>
      </div>

      <div className="tab-contents pg">
        <ul className="grid">
          <li>
            <img src={one3} alt="thor" />
          </li>

          <li>
            <img src={two3} alt="thor" />
          </li>

          <li>
            <img src={three3} alt="thor" />
          </li>

          <li>
            <img src={four3} alt="thor" />
          </li>

          <li>
            <img src={five3} alt="thor" />
          </li>

          <li>
            <img src={six3} alt="thor" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Show;
