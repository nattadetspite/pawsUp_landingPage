import React from "react";
import styled from "styled-components";
import { ActionButton } from "../content";

const HeroWrapper = styled.div`
  width: 100vw;
  max-width: 1080px;
  height: 50vh;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0%);
`;
const HeroContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  top: 40%;
  left: 20%;
  transform: translate(-50%, -50%);
`;

const Title = styled.p`
  white-space: pre-line;
  font-weight: bold;
  font-size: 2.4rem;
  margin-bottom: 0;
  color: #2e3748;
`;
const Description = styled.p`
  white-space: pre-line;
  line-height: 1.6rem;
  font-weight: light;
  font-size: 1rem;
  margin-bottom: 2rem;
  color: #2e3748;
`;
const HeroImageWrapper = styled.div`
  width: 100%;
  max-width: 640px;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(0deg, rgba(255, 199, 200, 0.40379901960784315) 0%, rgba(255, 235, 236, 1) 100%);
  border-radius: 0 0 0 10rem;
  position: absolute;
  left: 40%;
`;
const PugImage = styled.img`
  width: auto;
  height: 100%;
  position: absolute;
  bottom: -15%;
  left: 5%;
`;

const Primarybutton = styled.button`
  padding: 0.75rem 25px;
  margin: 0 1rem;
  width: 8rem;
  text-transform: capitalize;

  border-radius: 30px;
  background-color: #ed6f7a;
  border: none;
  color: #fff;

  &:focus {
    outline: 0;
  }

  cursor: pointer;
  transition: all 0.2s;
`;

const FootGrey = styled.img`
  position: absolute;
  left: -20%;
  top: 70%;
`;
const FootPink = styled.img`
  position: absolute;
  left: 20%;
  top: -10%;
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroContentWrapper>
        <Title>{"What's meant\n to be will always\n find a way."}</Title>
        <Description>{"PawsUp help you to find the best\n partner for your dearest fluffly friend"}</Description>
        <Primarybutton>Find A Match</Primarybutton>
      </HeroContentWrapper>
      <HeroImageWrapper>
        <FootPink src={"assets/foot_pink.png"} />
        <PugImage src="assets/hero.png" />
      </HeroImageWrapper>
      <FootGrey src={"assets/foot_grey.png"} />
    </HeroWrapper>
  );
};

export default Hero;
