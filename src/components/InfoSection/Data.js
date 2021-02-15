import svg1 from "../../images/svg-1.svg";
import svg2 from "../../images/svg-2.svg";
import svg3 from "../../images/svg-3.svg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Premium Bank",
  headline: "Unlimited transaction with zero fees",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.",
  buttonLabel: "Get started",
  imgStart: true,
  img: svg1,
  alt: "car",
  dark: true,
  primary: true,
  darktext: false,
};

export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  darkText: true,
  lightTextDesc: true,
  topLine: "Unlimited Access",
  headline: "Login to your account anytime",
  description:
    "We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.",
  buttonLabel: "Learn more",
  imgStart: false,
  img: svg2,
  alt: "piggybank",
  dark: false,
  primary: false,
  darktext: true,
};

export const homeObjThree = {
  id: "signup",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Join our Team",
  headline: "Creating an account is extremely easy",
  description:
    "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
  buttonLabel: "Start now",
  imgStart: true,
  img: svg3,
  alt: "paper",
  dark: false,
  primary: false,
  darktext: true,
};
