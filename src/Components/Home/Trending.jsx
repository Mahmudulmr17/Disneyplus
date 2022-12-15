import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Black from "../Images/Black.png"
const Trending = () => {
  return (
    <div>
      <Container>
        <h2>Trending</h2>
        <Content>
          <Wrap>
            <NavLink to="/detail/dk98JKlkmjkd9">
              <img
                src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/501783804F435A386DBC4736F529A8EF664B1817CCB0B552E52D825B85B0A97B/scale?width=400&aspectRatio=1.78&format=jpeg"
                alt=""
              />
            </NavLink>
          </Wrap>
          <Wrap>
            <NavLink to="/detail/JKKJBJK98hh9">
              <img
                src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/509E4D9F0BF98A9DC4CDD38954380782F6AB2664E503CC7652A37D18D06666BF/scale?width=400&aspectRatio=1.78&format=jpeg"
                alt=""
              />
            </NavLink>
          </Wrap>
          <Wrap>
            <NavLink to="/detail/JKergJ98mhd">
              <img
                src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg"
                alt=""
              />
            </NavLink>
          </Wrap>
          <Wrap>
            <NavLink to="/detail/JKergJ8mhd">
              <img src={Black} alt="" />
            </NavLink>
          </Wrap>
        </Content>
      </Container>
    </div>
  );
};

const Container = styled.div`
  padding: 28px 0 0 0;
  h2 {
    font-weight: bold !important;
  }
`;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  padding: 22px 0 0 0;
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0/73%) 0px 16px 10px -10px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default Trending;
