import styled from "styled-components";

export const PricingPlanContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  /* background: rgb(95, 184, 57);
  background: linear-gradient(
    0deg,
    rgba(95, 184, 57, 1) 0%,
    rgba(95, 184, 57, 0.30015756302521013) 100%
  ); */

  @media screen and (max-width: 1000px) {
    height: auto;
  }

  @media screen and (max-width: 1200px) {
    margin-bottom: 3rem;
  }

  @media screen and (max-width: 480px) {
    /* height: 1300px; */
    margin-bottom: 1.5rem;
  }
`;

export const ButtonGroup = styled.div`
  justify-content: "center";
  position: relative;
`;

export const ButtonGroupInner = styled.div`
  display: flex;
  justify-content: center;
  padding: 7px;
  margin: 1rem auto 5.25rem;
  border-radius: 5px;
  background-color: #f7f8fb;
`;

export const ButtonInner = styled.button`
  border: 0;
  padding: 15px 20px;
  border-radius: 5px;
  color: #000;
  font-size: 0.95rem;
  font-weight: 600;
  background-color: #f7f8fb;
  cursor: pointer;
  transition: all 0.3s;

  &.active {
    color: #0f2137;
    background-color: #fff;
    box-shadow: 0 3px 4px rgba(38, 78, 118, 0.1);
  }
  &:focus {
    outline: 0;
  }
`;

export const PricingPlanWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-content: center;
  grid-gap: 1rem;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const PricingPlanCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 10px;
  max-height: 760px;
  margin: 0 0.05rem;
  padding: 2rem;
  box-shadow: 0 1px 13px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.04);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    box-shadow: 0 1px 13px rgba(0, 0, 0, 0.25);
  }
`;

export const PricingPlanIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const PricingPlanH1 = styled.h1`
  font-size: 3.5rem;
  color: #414141;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 3rem;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const PricingPlanH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  text-align: start;
  color: #414141;
`;

export const PricingPlanP = styled.p`
  font-size: 1rem;
  padding: 0.65rem 4rem 0.65rem 1.5rem;
  color: #414141;
  letter-spacing: 0.025rem;

  &.priceTag {
    padding: 0 0 3rem 0;
    font-size: 2rem;
    font-weight: 600;
    display: inline-flex;
  }
  & span {
    font-size: 1rem;
    font-weight: 400;
    padding: 0.75rem 0 0 3px;
  }
`;
