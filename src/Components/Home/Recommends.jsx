import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Recommends = () => {
  return (
    <div>
      <Container>
        <h2>Recommends For You</h2>
        <Content>
          <Wrap>
            
            <NavLink to="/detail/463m6nlk36j3jn"><img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6wov6veZItAhkdSczBP22vpUDmdaorRNPghI8HM7eVCNk-B5v"
              alt=""
            /></NavLink>
          </Wrap>
          <Wrap>
            
            <NavLink to="/detail/463m6nlk33jn"><img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/706C68FF1CEA5A9C2AE0608892C2DF79E4AC1F0DDB4BFF7FE6DAFC36DAFC0286/scale?width=400&aspectRatio=1.78&format=jpeg"
              alt=""
            /></NavLink>
          </Wrap>
          <Wrap>
            
            <NavLink to="/detail/KDS88Y8SV"><img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0ECD36DD35658155915685271440833C29ED87E788CF8AE111AA6BCA6B939C37/scale?width=400&aspectRatio=1.78&format=jpeg"
              alt=""
            /></NavLink>
          </Wrap>
          <Wrap>
            
            <NavLink to="/detail/34906djkg"><img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C0A883EAB54DDDC924018D08CF4555EE72B3E9A8C214BDADF29CB82B5E2275D7/scale?width=400&aspectRatio=1.78&format=jpeg"
              alt=""
            /></NavLink>
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

export default Recommends;
