import React from "react";
import styled from "styled-components";
import logo from "../Images/cta-logo-one.svg";
import logo2 from "../Images/cta-logo-two.png";
const Banner = () => {
  return (
    <div>
      <Background>
        <Container>
          <Content>
            <img className="cta" src={logo} alt="logo" />
            <button type="button" className="get-bundle-btn">
              GET THE DISNEY BUNDLE
            </button>
            <h4>Stream Now: Tearms Apply</h4>
            <img src={logo2} alt="logo/img" />
            <button type="button" className="links">
              Sign Up For Disney+ Only
            </button>
            <button
              style={{
                color: "gray",
                background: "transparent",
                outline: "none",
                border: "none",
                fontSize: "18px",
              }}
              type="button"
              className=" text-gray"
            >
              $7.99/month or $79.99/year
            </button>

            {/* <div className="mt">
              <a
                style={{ textDecoration: "underline" }}
                className="View"
                href="#CardPlan"
              >
                View All Plan Options
              </a>
            </div> */}
          </Content>
        </Container>
      </Background>
    </div>
  );
};

const Background = styled.section`
  background: url("https://res.cloudinary.com/drilwd3mg/image/upload/v1668761569/assets/login_diwecj.jpg")
    center/cover no-repeat;
  height: 100vh;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 85%;
  margin: 0 0 90px 0;
`;
const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 650px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    max-width: 550px;
  }

  @media screen and (min-width: 550px) and (max-width: 767px) {
    max-width: 450px;
    margin-top: 13vh;
  }

  @media screen and (min-width: 375px) and (max-width: 550px) {
    max-width: 350px;
    margin-top: 13vh;
  }

  h4 {
    color: #fff;
    margin: 2vh 0;
    font-size: small;
  }

  img {
    width: 100%;
    height: auto;
    max-width: 600px;
    display: block;
    object-fit: contain;
    margin-bottom: 2vh;
  }

  > .cta {
    margin-bottom: 50px;
    margin-bottom: 18px;
  }

  > .get-bundle-btn {
    outline: none;
    border: none;
    padding: 11.5px 15px;
    width: 100%;
    align-items: center;
    text-align: center;
    letter-spacing: 1.5px;
    background: #0066ef;
    color: #f9f9f9;
    font-size: 18px;
    border-radius: 0.345rem;
    cursor: pointer;

    &:hover {
      background: #0099ff;
    }
  }

  > .links {
    outline: none;
    border: none;
    font-size: 17px;
    background: transparent;
    color: #f9f9f9;
  }
`;

//const Container = styled.div``;
//const Content = styled.div``;

export default Banner;
