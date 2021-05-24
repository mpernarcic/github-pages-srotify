import React, { useState } from "react";
import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroWrapper,
  HeroRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroWrapper>
        <HeroRow>
          <Column1>
            <TextWrapper>
              <TopLine>Šrotify</TopLine>
              <Heading>We will help you grow your business</Heading>
              <Subtitle>
                Our ultimate motto is to fulfill the demands of the buyers by
                making them satisfied with getting dem stonks thru the roof
              </Subtitle>
              <HeroBtnWrapper>
                <Button
                  to="signup"
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  primary="true"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Learn More {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
              </HeroBtnWrapper>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img
                src={require("../../images/svg-1.svg").default}
                alt="Mad Stonks"
              />
            </ImgWrap>
          </Column2>
        </HeroRow>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default HeroSection;
