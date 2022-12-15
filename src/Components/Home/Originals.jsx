import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Originals = () => {
  return (
    <div>
      <Container>
        <h2>Originals</h2>
        <Content>
          <Wrap>
            <NavLink to="/detail/dk98JK494m">
              <img
                src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F8D1A6FD00ED479CC5E2E5C3E85F10EB05550748BD3C0FE76756614071968541/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals"
                alt=""
              />
            </NavLink>
          </Wrap>
          <Wrap>
            <NavLink to="/detail/dk98JKljv9m">
              <img
                src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A13BEC78ACF76FC91A94A1595A62A42CC26DFC6259332C74E061ADA379024E5C/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals"
                alt=""
              />
            </NavLink>
          </Wrap>
          <Wrap>
            <NavLink to="/detail/dk98JKlkndg9">
              <img
                src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CC08686E87BDB2D83A46C9608CB2F43018381A82608C380649351A00ED0D2919/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals"
                alt=""
              />
            </NavLink>
          </Wrap>
          <Wrap>
            <NavLink to="/detail/dk98JKlkndd8">
              <img
                src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E486A02FA7B60669E77958D4FAE567AA5C9C57344006E1D1ADFC080719545166/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals"
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

export default Originals;
