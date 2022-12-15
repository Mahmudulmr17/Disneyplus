import React from "react";
import styled from "styled-components";
import imgStream from "../Images/Stream.jpeg";
const Stream = () => {
  return (
    <div>
      <Section>
        <Container>
          <TextInfo>
            <h1 className="disney-titles">
              Stream With Get Premier Access The
            </h1>
            <h1 className="disney-titles">Same Day Its In Theaters</h1>
            <p>
              Get Premier Access to Raya and the Last Dragon for an additional
              fee with a Disney+ subscription. As of 03/26/21, the price of
              Disney+ and The Disney Bundle will increase by $1.
            </p>
            <button type="Button" className="btn-them-disney">
              PREORDER
            </button>
          </TextInfo>
          <ImageInfo>
            <img src={imgStream} alt="imgStream" />
          </ImageInfo>
        </Container>
      </Section>
    </div>
  );
};

const Section = styled.section`
  padding: 50px 5%;
  position: relative;
  background: transparent;

  @media screen and (max-width: 991px) {
    padding: 35px 50px;
  }

  @media screen and (max-width: 767px) {
    padding: 25px;
  }
`;
const Container = styled.div`
  display: flex;
  justify-self: center;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;

  @media screen and (max-width: 991px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

const TextInfo = styled.div`
  width: 48%;
  flex: 0 auto;
  opacity: 1;
  z-index: 1500;
  position: relative;

  @media screen and (max-width: 991px) {
    width: 100%;
    padding: 0;
  }

  p {
    font-size: 1rem;
    font-weight: 100;

    @media screen and (min-width: 375px) and (max-width: 550px) {
      font-size: 0.85rem;
      line-height: 1rem;
    }

    @media screen and (min-width: 280px) and (max-width: 375px) {
      font-size: 0.7rem;
      line-height: 1rem;
      margin-top: 1vh;
    }
  }
`;

const ImageInfo = styled.div`
  width: 48%;
  flex: 0 auto;
  opacity: 1;
  z-index: 1500;
  position: relative;

  @media screen and (max-width: 991px) {
    width: 100%;
    padding: 0;
  }

  img {
    width: 100%;
    max-width: 600px;
    height: auto;

    @media screen and (min-width: 500px) and (max-width: 1200px) {
      height: auto;
      width: 100%;
      object-fit: contain;
      margin-top: 14px;
    }

    @media screen and (min-width: 280px) and (max-width: 500px) {
      height: 31vh;
      width: 100%;
      object-fit: contain;
      margin-top: 12px;
    }
  }
`;

export default Stream;
