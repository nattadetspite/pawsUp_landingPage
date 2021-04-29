import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem;
`;
const TitleText = styled.p`
  color: #2e3748;
  font-weight: bold;
  font-size: 1.2rem;
`;
const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;
const Image = styled.img`
  width: 6rem;
  height: 6rem;
`;
const ImageText = styled.p`
  color: #024d6d;
`;
const ActionButton = styled.button`
  padding: 0.75rem 25px;
  margin: 0 1rem;
  min-width: 130px;
  text-transform: capitalize;

  border-radius: 30px;
  background-color: #84c3c8;
  border: none;
  color: #fff;

  &:hover {
    background-color: #ec6e79;
    color: #fff;
  }
  &:active {
    background-color: #ec6e79;
    color: #fff;
  }
  &:focus {
    outline: 0;
  }

  cursor: pointer;
  transition: all 0.2s;
`;

const item = [
  {
    img: "assets/icon-1.png",
    text: "Confident",
  },
  { img: "assets/icon-2.png", text: "Shy" },
  { img: "assets/icon-3.png", text: "Independent" },
  { img: "assets/icon-4.png", text: "Laidback" },
  { img: "assets/icon-5.png", text: "Adaptable" },
];
const Content = () => {
  return (
    <Wrapper>
      <TitleText>Dogs have these 5 major personality types</TitleText>
      <IconWrapper>
        {item.map((item) => (
          <ItemWrapper>
            <Image src={item.img} />
            <ImageText>{item.text}</ImageText>
          </ItemWrapper>
        ))}
      </IconWrapper>
      <ActionButton>Learn More</ActionButton>
    </Wrapper>
  );
};

export default Content;
