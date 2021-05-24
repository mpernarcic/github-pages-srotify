import React from "react";
import Company1 from "../../images/company1.png";
import Company2 from "../../images/company2.png";
import Company3 from "../../images/company3.png";
import Company4 from "../../images/company4.png";
import Company5 from "../../images/company5.png";
import Company6 from "../../images/company6.png";
import Company7 from "../../images/company7.png";
import Company8 from "../../images/company8.png";
import {
  TestimonialsContainer,
  TestimonialsH1,
  TestimonialsP,
  TestimonialsWrapper,
  TestimonialsCard,
  TestimonialsIcon,
} from "./TestimonialsElements";
import "aos/dist/aos.css";

const Testimonials = () => {
  return (
    <TestimonialsContainer id="testimonials">
      <TestimonialsH1 data-aos="fade-up">
        Trusted by 999+ clients
      </TestimonialsH1>
      <TestimonialsP data-aos="fade-up">
        We partner with the biggest brands in digital to create powerful
        products and experiences. From small to large companies, from small to
        large challenges, our digital advertising agency approaches every
        project with complete dedication and high professionalism. We accept all
        digital challenges, successfully solve them for our clients, and raise
        the bar high for their competition.
      </TestimonialsP>
      <TestimonialsWrapper>
        <TestimonialsCard data-aos="fade-right" data-aos-delay="100">
          <TestimonialsIcon src={Company1} />
        </TestimonialsCard>
        <TestimonialsCard data-aos="fade-right" data-aos-delay="150">
          <TestimonialsIcon src={Company2} />
        </TestimonialsCard>
        <TestimonialsCard data-aos="fade-right" data-aos-delay="200">
          <TestimonialsIcon src={Company3} />
        </TestimonialsCard>
        <TestimonialsCard data-aos="fade-right" data-aos-delay="250">
          <TestimonialsIcon src={Company4} />
        </TestimonialsCard>
      </TestimonialsWrapper>
      <TestimonialsWrapper style={{ borderBottom: "none" }}>
        <TestimonialsCard data-aos="fade-left" data-aos-delay="300">
          <TestimonialsIcon src={Company5} />
        </TestimonialsCard>
        <TestimonialsCard data-aos="fade-left" data-aos-delay="350">
          <TestimonialsIcon src={Company6} />
        </TestimonialsCard>
        <TestimonialsCard data-aos="fade-left" data-aos-delay="400">
          <TestimonialsIcon src={Company7} />
        </TestimonialsCard>
        <TestimonialsCard data-aos="fade-left" data-aos-delay="450">
          <TestimonialsIcon src={Company8} />
        </TestimonialsCard>
      </TestimonialsWrapper>
    </TestimonialsContainer>
  );
};

export default Testimonials;
