import React, { useState } from "react";
import { MdCheckCircle, MdCancel } from "react-icons/md";
import {
  PricingPlanContainer,
  PricingPlanH1,
  ButtonGroup,
  ButtonGroupInner,
  ButtonInner,
  PricingPlanWrapper,
  PricingPlanCard,
  PricingPlanH2,
  PricingPlanP,
} from "./PricingPlanElements";
import { HeroBtnWrapper } from "../HeroSection/HeroElements";
import { Button } from "../ButtonElements";
import "aos/dist/aos.css";

const packages = {
  monthly: [
    {
      id: 1,
      name: "Free Plan",
      description: "For Small teams or office",
      buttonText: "Start free trial",
      priceWithUnit: "$0",
      points: [
        {
          id: 1,
          icon: (
            <MdCheckCircle
              style={{
                color: "#1C9E75",
                transform: "scale(1.3)",
                marginRight: "15px",
              }}
            />
          ),
          text: "Drag & Drop Builder",
          isAvailable: true,
        },
        {
          id: 2,
          icon: (
            <MdCheckCircle
              style={{
                color: "#1C9E75",
                transform: "scale(1.3)",
                marginRight: "15px",
              }}
            />
          ),
          text: "1,000's of Templates",
          isAvailable: true,
        },
        {
          id: 3,
          icon: (
            <MdCancel
              style={{
                color: "#1C9E75",
                transform: "scale(1.3)",
                marginRight: "15px",
              }}
            />
          ),
          text: "Blog Support Tools",
          isAvailable: false,
        },
        {
          id: 4,
          icon: (
            <MdCancel
              style={{
                color: "#1C9E75",
                transform: "scale(1.3)",
                marginRight: "15px",
              }}
            />
          ),
          text: "eCommerce Store ",
          isAvailable: false,
        },
      ],
    },
    {
      id: 2,
      name: "Business king",
      description: "For Enterprise business",
      priceWithUnit: "$15",
      buttonText: "Create account",
      anotherOption: "Or Start 14 Days trial",
      points: [
        {
          id: 1,
          icon: (
            <MdCheckCircle
              style={{
                color: "#1C9E75",
                transform: "scale(1.3)",
                marginRight: "15px",
              }}
            />
          ),
          text: "Drag & Drop Builder",
          isAvailable: true,
        },
        {
          id: 2,
          icon: (
            <MdCheckCircle
              style={{
                color: "#1C9E75",
                transform: "scale(1.3)",
                marginRight: "15px",
              }}
            />
          ),
          text: "1,000's of Templates",
          isAvailable: true,
        },
        {
          id: 3,
          icon: (
            <MdCheckCircle
              style={{
                color: "#1C9E75",
                transform: "scale(1.3)",
                marginRight: "15px",
              }}
            />
          ),
          text: "Blog Support Tools",
          isAvailable: true,
        },
        {
          id: 4,
          icon: (
            <MdCancel
              style={{
                color: "#1C9E75",
                transform: "scale(1.3)",
                marginRight: "15px",
              }}
            />
          ),
          text: "eCommerce Store ",
          isAvailable: false,
        },
      ],
    },
    {
      id: 3,
      header: "Suggested",
      headerIcon: (
        <MdCheckCircle
          style={{
            color: "#1C9E75",
            transform: "scale(1.3)",
            marginRight: "15px",
          }}
        />
      ),
      name: "Pro Master",
      description: "For Pro level developers",
      priceWithUnit: "$24",
      buttonText: "Create account",
      anotherOption: "Or Start 14 Days trial",
      points: [
        {
          id: 1,
          icon: (
            <MdCheckCircle
              style={{
                color: "#1C9E75",
                transform: "scale(1.3)",
                marginRight: "15px",
              }}
            />
          ),
          text: "Drag & Drop Builder",
          isAvailable: true,
        },
        {
          id: 2,
          icon: (
            <MdCheckCircle
              style={{
                color: "#1C9E75",
                transform: "scale(1.3)",
                marginRight: "15px",
              }}
            />
          ),
          text: "1,000's of Templates",
          isAvailable: true,
        },
        {
          id: 3,
          icon: (
            <MdCheckCircle
              style={{
                color: "#1C9E75",
                transform: "scale(1.3)",
                marginRight: "15px",
              }}
            />
          ),
          text: "Blog Support Tools",
          isAvailable: true,
        },
        {
          id: 4,
          icon: (
            <MdCheckCircle
              style={{
                color: "#1C9E75",
                transform: "scale(1.3)",
                marginRight: "15px",
              }}
            />
          ),
          text: "eCommerce Store ",
          isAvailable: true,
        },
      ],
    },
  ],
  annual: [
    {
      id: 1,
      name: "Free Plan",
      description: "For Small teams or office",
      buttonText: "Start free trial",
      priceWithUnit: "$0",
      points: [
        {
          id: 1,
          icon: (
            <MdCheckCircle
              style={{
                color: "#1C9E75",
                transform: "scale(1.3)",
                marginRight: "15px",
              }}
            />
          ),
          text: "1,000's of Templates",
          isAvailable: true,
        },
        {
          id: 2,
          icon: (
            <MdCheckCircle
              style={{
                color: "#1C9E75",
                transform: "scale(1.3)",
                marginRight: "15px",
              }}
            />
          ),
          text: "Drag & Drop Builder",
          isAvailable: true,
        },
        {
          id: 3,
          icon: (
            <MdCheckCircle
              style={{
                color: "#1C9E75",
                transform: "scale(1.3)",
                marginRight: "15px",
              }}
            />
          ),
          text: "Blog Support Tools",
          isAvailable: true,
        },
        {
          id: 4,
          icon: (
            <MdCancel
              style={{
                color: "#1C9E75",
                transform: "scale(1.3)",
                marginRight: "15px",
              }}
            />
          ),
          text: "eCommerce Store ",
          isAvailable: true,
        },
      ],
    },
    {
      id: 2,
      name: "Business king",
      description: "For Enterprise business",
      priceWithUnit: "$25",
      buttonText: "Create account",
      anotherOption: "Or Start 10 Days trial",
      points: [
        {
          id: 1,
          icon: (
            <MdCheckCircle
              style={{
                color: "#1C9E75",
                transform: "scale(1.3)",
                marginRight: "15px",
              }}
            />
          ),
          text: "eCommerce Store",
          isAvailable: true,
        },
        {
          id: 2,
          icon: (
            <MdCheckCircle
              style={{
                color: "#1C9E75",
                transform: "scale(1.3)",
                marginRight: "15px",
              }}
            />
          ),
          text: "Blog Support Tools",
          isAvailable: true,
        },
        {
          id: 3,
          icon: (
            <MdCheckCircle
              style={{
                color: "#1C9E75",
                transform: "scale(1.3)",
                marginRight: "15px",
              }}
            />
          ),
          text: "1,000's of Templates",
          isAvailable: true,
        },
        {
          id: 4,
          icon: (
            <MdCheckCircle
              style={{
                color: "#1C9E75",
                transform: "scale(1.3)",
                marginRight: "15px",
              }}
            />
          ),
          text: "Drag & Drop Builder ",
          isAvailable: true,
        },
      ],
    },
    {
      id: 3,
      header: "Suggested",
      headerIcon: (
        <MdCheckCircle
          style={{
            color: "#1C9E75",
            transform: "scale(1.3)",
            marginRight: "15px",
          }}
        />
      ),
      name: "Pro Master",
      description: "For Pro level developers",
      priceWithUnit: "$39",
      buttonText: "Create account",
      anotherOption: "Or Start 10 Days trial",
      points: [
        {
          id: 1,
          icon: (
            <MdCheckCircle
              style={{
                color: "#1C9E75",
                transform: "scale(1.3)",
                marginRight: "15px",
              }}
            />
          ),
          text: "eCommerce Store",
          isAvailable: true,
        },
        {
          id: 2,
          icon: (
            <MdCheckCircle
              style={{
                color: "#1C9E75",
                transform: "scale(1.3)",
                marginRight: "15px",
              }}
            />
          ),
          text: "Blog Support Tools",
          isAvailable: true,
        },
        {
          id: 3,
          icon: (
            <MdCheckCircle
              style={{
                color: "#1C9E75",
                transform: "scale(1.3)",
                marginRight: "15px",
              }}
            />
          ),
          text: "1,000's of Templates",
          isAvailable: true,
        },
        {
          id: 4,
          icon: (
            <MdCheckCircle
              style={{
                color: "#1C9E75",
                transform: "scale(1.3)",
                marginRight: "15px",
              }}
            />
          ),
          text: "Drag & Drop Builder ",
          isAvailable: true,
        },
      ],
    },
  ],
};

const PricingPlan = () => {
  const { monthly, annual } = packages;
  const [state, setState] = useState({
    active: "monthly",
    pricingPlan: monthly,
  });

  const handlePricingPlan = (plan) => {
    if (plan === "annual") {
      setState({
        active: "annual",
        pricingPlan: annual,
      });
    } else {
      setState({
        active: "monthly",
        pricingPlan: monthly,
      });
    }
  };

  return (
    <PricingPlanContainer id="pricingplan" data-aos="fade-up">
      <PricingPlanH1>Choose your pricing plan</PricingPlanH1>
      <ButtonGroup data-aos="fade-up">
        <ButtonGroupInner>
          <ButtonInner
            className={state.active === "monthly" ? "active" : ""}
            type="button"
            aria-label="Monthly"
            onClick={() => handlePricingPlan("monthly")}
          >
            Monthly Plan
          </ButtonInner>
          <ButtonInner
            className={state.active === "annual" ? "active" : ""}
            type="button"
            aria-label="Annual"
            onClick={() => handlePricingPlan("annual")}
          >
            Annual Plan
          </ButtonInner>
        </ButtonGroupInner>
      </ButtonGroup>
      <PricingPlanWrapper data-aos="fade-up">
        {state.pricingPlan.map((packageData) => (
          <PricingPlanCard
            key={packageData.id}
            // name={packageData.name}
            // description={packageData.description}
            // points={packageData.points}
            data={packageData}
          >
            <PricingPlanH2>{packageData.name}</PricingPlanH2>
            <PricingPlanP style={{ paddingLeft: "0", paddingBottom: "2rem" }}>
              {packageData.description}
            </PricingPlanP>
            {packageData.points.map((packageDataPoints) => (
              <PricingPlanP key={packageDataPoints.id} data={packageDataPoints}>
                {packageDataPoints.icon}
                {packageDataPoints.text}
              </PricingPlanP>
            ))}
            <HeroBtnWrapper style={{ alignItems: "center" }}>
              <PricingPlanP className="priceTag">
                {packageData.priceWithUnit}
                <span>
                  /{state.active === "monthly" ? "Monthly" : "Annually"}
                </span>
              </PricingPlanP>

              <Button
                to="signup"
                primary="true"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                {packageData.buttonText}
              </Button>
            </HeroBtnWrapper>
          </PricingPlanCard>
        ))}
      </PricingPlanWrapper>
    </PricingPlanContainer>
  );
};

export default PricingPlan;
