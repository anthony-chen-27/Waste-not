import React from "react";
import styled from "styled-components";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400&display=swap');
</style>;

export const Wrapper = styled.div`
  padding: 3em;

  h2 {
    text-align: center;
    letter-spacing: 0.7px;
    color: hsl(0, 0%, 70%);
    // text-shadow: 2px 2px hsla(0, 0%, 90%, 60%);
    text-shadow: 2px 2px hsla(0, 50%, 50%, 10%);
    padding-bottom: 1em;
    font-size: 25px;
  }

  p {
    letter-spacing: 0.2px;
    color: hsl(0, 0%, 30%);
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 300;
  }
`;

class MainPage extends React.Component {
  render() {
    return (
      <Wrapper>
        <h2>Our Mission</h2>
        <p>
          Waste Not is a website that aims to tackle the problem of wasted food.
          Every day, restaurants around the world have to throw away whatever is
          left over from the day that they cannot keep, while millions of people
          in the world still suffer from hunger. While we may not be able to
          solve world hunger, we aim to contribute to making food that gets
          wasted available to those who need it. With Waste Not, restaurants can
          list at the end of day if they have extra food at the end of the day
          that would've been thrown out, and users are able to go on to see
          restaurants near them that are offering free food.
        </p>
      </Wrapper>
    );
  }
}

export default MainPage;
