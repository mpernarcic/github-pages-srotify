import styled from "styled-components";

export const TestimonialsContainer = styled.div`
  height: 100vh;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;

  @media screen and (max-width: 768px) {
    height: 1300px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const TestimonialsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-content: center;
  justify-content: center;
  grid-gap: 0.25rem;
  padding: 5px 50px;
  border-bottom: 1px solid #cbcbce;

  @media screen and (max-width: 1000px) {
    /* grid-template-columns: 1fr 1fr; */
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
    border-bottom: none;
  }
`;

export const TestimonialsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  margin: 0 0.05rem;
  padding: 1rem 3rem;
  /* box-shadow: 0 1px 13px rgba(0, 0, 0, 0.1); */
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.04) !important;
    transition: all 0.2s ease-in-out !important;
    cursor: pointer;
  }

  @media screen and (max-width: 1100px) {
    padding: 1rem 0.5rem;
  }
`;

export const TestimonialsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
  max-width: 100%;
  object-fit: contain;
`;

export const TestimonialsH1 = styled.h1`
  font-size: 3.5rem;
  color: #414141;
  margin-bottom: 64px;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
    text-align: center;
    justify-content: center;
  }
`;

export const TestimonialsP = styled.p`
  color: #414141;
  font-size: 1.15rem;
  padding: 0 25rem 5rem;
  text-align: center;

  @media screen and (max-width: 1600px) {
    padding: 0 15rem 5rem;
  }

  @media screen and (max-width: 1100px) {
    padding: 0 5rem 5rem;
  }

  @media screen and (max-width: 768px) {
    padding: 0 2rem 5rem;
  }
`;
