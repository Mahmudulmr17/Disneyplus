import React from "react";
import styled from "styled-components";
import Banner from "../Login/Banner";
import DownloadNow from "../Login/DownloadNow";
// import GroupWatch from "../Login/GroupWatch";
import Show from "../Login/Show";
import Stream from "../Login/Stream";
import Advertise from "../Login/Advertise";
// import Devices from "../Login/Devices";
// import Footer from "./Footer";

const Login = () => {
  return (
    <div>
      <Main>
        {/* <Nav /> */}
        <Banner />
        <Show />
        <Stream />
        {/*<GroupWatch /> */}
        <DownloadNow />
        <Advertise />
        {/* <Devices /> */}
      </Main>
    </div>
  );
};

const Main = styled.main`
  width: auto;
  height: auto;
  overflow: auto;
`;

export default Login;
