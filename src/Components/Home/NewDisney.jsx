import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NewDisney = () => {
  return (
    <div>
      <Container>
        <h2>New to Disney+</h2>
        <Content>
          <Wrap>
            <NavLink to="/detail/dkjn894m">
              <img
                src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/341AE85B6C1423B9042B5F2E786645EE551B9D546C3D263B220A4727617FD2B8/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals"
                alt=""
              />
            </NavLink>
          </Wrap>
          <Wrap>
            <NavLink to="/detail/459i5y5iy">
              <img
                src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1E0501AFBAFCA1ABB5D31DBA7D1A913B2A35D70FD3DFD804939B71901577161D/scale?width=400&aspectRatio=1.78&format=jpeg"
                alt=""
              />
            </NavLink>
          </Wrap>
          <Wrap>
            <NavLink to="/detail/dk98JKjn894m">
              <img
                src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/01666FAA085FF29B709DB13975E563E5E047DAAFF7D8F331201CB73F3C30027E/scale?width=400&aspectRatio=1.78&format=jpeg"
                alt=""
              />
            </NavLink>
          </Wrap>
          <Wrap>
            <NavLink to="/detail/dk98JK4n894m">
              <img
                src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4B32D8CB7C0C358E9FF348FB0338AD13F9A5836808E9EF5FADD9DBDE52FC3CAD/scale?width=400&aspectRatio=1.78&format=jpeg"
                alt=""
              />
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

export default NewDisney;
