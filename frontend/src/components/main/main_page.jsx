import React from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "../logo/logo";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500&display=swap');
</style>;

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400&display=swap');
</style>;

export const Wrapper = styled.div`
  scroll-behavior: smooth;
  padding: 10em 10em 5em;
  &::selection {
    background: transparent;
  }

  h2 {
    text-align: center;
    letter-spacing: 0.8px;
    color: hsl(0, 0%, 70%);
    // text-shadow: 2px 2px hsla(0, 0%, 90%, 60%);
    // text-shadow: 2px 2px hsla(0, 50%, 50%, 10%);
    text-shadow: 2px 1px hsla(193, 17%, 62%, 20%);
    padding-bottom: 1em;
    font-size: 30px;
    // font-family: 'Hind Siliguri', sans-serif;

    &::selection {
      background: transparent;
    }
`;

export const Paragraph = styled.p`
  letter-spacing: 0.5px;
  line-height: 1.5;
  color: hsl(0, 0%, 30%);
  font-family: "Noto Sans JP", sans-serif;
  font-weight: 300;
  font-size: 18px;
`;

export const LogoDiv = styled.div`
  // outline: solid pink;
  text-align: center;
  font-size: 35px;
  // margin-top: 30px;
  padding-top: 1.5em;
`;

export const ArrowIcon = styled.div`
  text-align: center;
  margin-top: -13.5rem;
  margin-bottom: 5rem;

  @-webkit-keyframes hvr-wobble-vertical {
    16.65% {
      -webkit-transform: translateY(8px);
      transform: translateY(8px);
    }
    33.3% {
      -webkit-transform: translateY(-6px);
      transform: translateY(-6px);
    }
    49.95% {
      -webkit-transform: translateY(4px);
      transform: translateY(4px);
    }
    66.6% {
      -webkit-transform: translateY(-2px);
      transform: translateY(-2px);
    }
    83.25% {
      -webkit-transform: translateY(1px);
      transform: translateY(1px);
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  @keyframes hvr-wobble-vertical {
    16.65% {
      -webkit-transform: translateY(8px);
      transform: translateY(8px);
    }
    33.3% {
      -webkit-transform: translateY(-6px);
      transform: translateY(-6px);
    }
    49.95% {
      -webkit-transform: translateY(4px);
      transform: translateY(4px);
    }
    66.6% {
      -webkit-transform: translateY(-2px);
      transform: translateY(-2px);
    }
    83.25% {
      -webkit-transform: translateY(1px);
      transform: translateY(1px);
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  .hvr-wobble-vertical {
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  }
  .hvr-wobble-vertical:hover,
  .hvr-wobble-vertical:focus,
  .hvr-wobble-vertical:active {
    -webkit-animation-name: hvr-wobble-vertical;
    animation-name: hvr-wobble-vertical;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
  }
`;

class MainPage extends React.Component {
  constructor() {
    super();
  }

  scrollToBottom() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <Wrapper>
        <ArrowIcon>
          <IoIosArrowDown
            className="hvr-wobble-vertical"
            size={50}
            color={"hsla(0, 0%, 100%, 0.90)"}
            onClick={this.scrollToBottom}
          />
        </ArrowIcon>
        {/* <LogoDiv><Logo/></LogoDiv> */}
        <h2>Our Mission</h2>
        <Paragraph>
          Waste Not is a website that aims to tackle the problem of wasted food.
          Every day, restaurants around the world have to throw away hot and delicious foods from the day that they cannot keep, while millions of people
          in the world still suffer from hunger. While we may not be able to
          solve world hunger, we aim to contribute to making food that will otherwise be
          wasted available to those who need it. With Waste Not, restaurants are able to
          list if they have extra food at the end of the day, and users are able to see restaurants near them
          that are offering free food. Sign up to see what your neighborhood has
          to offer!
        </Paragraph>
        <br/>
        <Paragraph>
          Currently available in the San Francisco Bay Area, Chicago, Los Angeles, and New York. Please check back for location updates as we expand.
        </Paragraph>
        <LogoDiv>
          <Logo />
        </LogoDiv>
      </Wrapper>
    );
  }
}

export default MainPage;
