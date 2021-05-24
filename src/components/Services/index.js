import React from "react";
import Icon1 from "../../images/svg-5.svg";
import Icon2 from "../../images/svg-6.svg";
import Icon3 from "../../images/svg-7.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";
import "aos/dist/aos.css";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1 data-aos="fade-up">Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard data-aos="flip-left">
          <ServicesIcon src={Icon1} />
          <ServicesH2>SEO Optimization</ServicesH2>
          <ServicesP>
            Through precise and proven strategies, we will make your company
            visible
          </ServicesP>
        </ServicesCard>
        <ServicesCard data-aos="flip-left">
          <ServicesIcon src={Icon2} />
          <ServicesH2>Web Development</ServicesH2>
          <ServicesP>
            We create simple and functional websites tailored to your company
          </ServicesP>
        </ServicesCard>
        <ServicesCard data-aos="flip-left">
          <ServicesIcon src={Icon3} />
          <ServicesH2>Social Media Management</ServicesH2>
          <ServicesP>
            We will help you build a strong relationship with your customers
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
