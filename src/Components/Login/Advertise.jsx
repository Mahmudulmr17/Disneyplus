import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../Images/cta-logo-one.svg";
const Advertise = () => {
  return (
    <div>
      <Section>
        <Container>
          <ImgInfo>
            <img src={logo} alt="disney+" />
          </ImgInfo>
          <TextInfo>
            <p>
              Get The Disney Bundle to stream the best movies, shows, and sports
              with Disney+, Hulu, and ESPN+.{" "}
              <Link style={{ textDecoration: "underline", cursor: "pointer" }}>
                Terms Apply.
              </Link>
            </p>

            <button type="button" className="btn-them-disney">
              SIGN UP NOW
            </button>
          </TextInfo>
        </Container>
      </Section>
    </div>
  );
};

const Section = styled.section`
  position: relative;
  padding: 35px 5%;
  background: transparent;
`;
const Container = styled.div`
  /*width: 100%;*/
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border: 1px solid #f9f9f9;
  padding: 35px 5%;

  @media screen and (max-width: 991px) {
    flex-direction: column;
    justify-content: center;
    padding: 25px 35px;
  }

  @media screen and (max-width: 767px) {
    padding: 25px 15px;
  }
`;

const ImgInfo = styled.div`
  width: 100%;
  flex: 0 auto;
  opacity: 1;
  z-index: 1500;

  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

const TextInfo = styled.div`
  width: 100%;
  flex: 0 auto;
  opacity: 1;
  z-index: 1500;
  text-align: center;

  p {
    font-size: 1rem;

    @media screen and (max-width: 550px) {
      font-size: 0.95rem;
    }
  }

  @media screen and (max-width: 991px) {
    width: 100%;
  }

  img {
    width: 100%;
    height: auto;

    object-fit: contain;
    object-position: center;
    max-width: 600px;
  }
`;

export default Advertise;
