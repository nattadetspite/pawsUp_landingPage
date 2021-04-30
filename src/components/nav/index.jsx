import React, { useState } from "react";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import { Twirl as Hamburger } from "hamburger-react";

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 15px #999;

  height: 4rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
  background-color: white;
`;
const Icon = styled.img`
  width: auto;
  height: 50%;
  padding: 1rem;
`;
const NavButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const NavButton = styled.button`
  padding: 0 2rem;
  height: 4rem;
  width: max-content;
  text-transform: capitalize;

  font-weight: bold;
  font-size: 1rem;
  background-color: #fff;
  border: none;
  color: #2e3748;

  &:hover {
    background-color: #ed6f7a;
    color: #fff;
  }

  &:focus {
    outline: 0;
  }

  cursor: pointer;
  transition: all 0.2s;
`;
const NavModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  position: fixed;
  top: 3rem;
  left: 0;
  z-index: 10;

  display: flex;
  flex-direction: column;
  justify-content: center;

  transform: ${(props) => (props.isShow ? `translate(0, 0)` : `translate(100%, 0)`)};

  transition: all 0.5s;
`;
const NavModalbutton = styled.button`
  padding: 2rem;
  width: 100%;
  text-transform: capitalize;

  font-weight: bold;
  font-size: 1rem;
  background-color: #fff;
  border: none;
  color: #2e3748;

  &:hover {
    background-color: #ed6f7a;
    color: #fff;
  }

  &:focus {
    outline: 0;
  }

  cursor: pointer;
  transition: all 0.2s;
`;

const ImageSearch = styled.div`
  padding: 0 2rem;
`;

const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z"
      fill="#2e3748"
    />
  </svg>
);
const NavModal = (props) => {
  return (
    <NavModalWrapper isShow={props.showModal}>
      {NavButtonItem.map((item) => (
        <NavModalbutton>{item}</NavModalbutton>
      ))}
    </NavModalWrapper>
  );
};
const NavButtonItem = ["Find A Match", "Dog's Personalities", "About Us", "Contact Us"];
const Nav = () => {
  const [showModal, updateShowModal] = useState(false);

  const onClickBurger = (input) => {
    console.log("input");
    updateShowModal(input);
  };
  return (
    <NavWrapper>
      <Icon src={"assets/logo.svg"} />
      {isMobile ? (
        <>
          <NavModal showModal={showModal} />
          <div onClick={() => onClickBurger(!showModal)}>
            <Hamburger></Hamburger>
          </div>
        </>
      ) : (
        <NavButtonWrapper>
          {NavButtonItem.map((item) => (
            <NavButton>{item}</NavButton>
          ))}

          <ImageSearch>
            <SearchIcon></SearchIcon>
          </ImageSearch>
        </NavButtonWrapper>
      )}
    </NavWrapper>
  );
};

export default Nav;
