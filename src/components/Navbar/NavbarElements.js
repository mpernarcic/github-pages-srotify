import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#fff" : "transparent")};
  height: ${({ scrollNav }) => (scrollNav ? "80px" : "124px")};
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  transition-timing-function: ease-in;
  transition: 0.5s;
  box-shadow: 0px -5px 30px -10px rgba(0, 0, 0, 0.5);

  & > * {
    font-size: ${({ scrollNav }) => (scrollNav ? "1rem" : "1.2rem")};
    transition-timing-function: ease-in;
    transition: 0.5s;
  }

  @media screen and (max-width: 1200px) {
    height: 80px;
  }

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #000;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

  & img {
    display: flex;
    width: ${({ scrollNav }) => (scrollNav ? "90px" : "110px")};
    transition-timing-function: ease-in;
    transition: 0.5s;
  }

  & img:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
  }

  @media screen and (max-width: 1200px) {
    transform: scale(0.7);
  }

  @media screen and (max-width: 960px) {
    margin-left: -20px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    stroke: black;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.5rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
    transition: border-bottom 0.2s ease-in-out;
    color: #01bf71;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
    color: #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 20px;
  white-space: nowrap;
  padding: 7px 22px;
  color: #414141;
  font-size: ${({ scrollNav }) => (scrollNav ? "1rem" : "1.2rem")};
  transition-timing-function: ease-in;
  transition: 0.5s;
  font-weight: 700;
  outline: none;
  border: solid 2px #1c9e75;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #1c9e75;
    color: #fff;
    transform: scale(1.1);
  }
`;
