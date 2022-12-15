import React from "react";
import styled from "styled-components";
import background from "../Images/background.png";
import Banner from "../Home/Banner";
import Brand from "../Home/Brand";
import Recommends from "../Home/Recommends";
import Originals from "../Home/Originals";
import NewDisney from "../Home/NewDisney";
import Trending from "../Home/Trending";

const Home = () => {
  return (
    <div>
      <Container>
        <Banner />
        <Brand />
        <Recommends />
        <NewDisney />
        <Originals />
        <Trending />
      </Container>
    </div>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(310vh - 250px);
  padding: 0 calc(3.5vw + 5px);
  display: block;
  overflow-x: hidden;
  background: url(${background}) center/cover no-repeat;
`;

export default Home;
