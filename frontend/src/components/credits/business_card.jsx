import React from "react";
import styled from "styled-components";

import Picture from "./blank-profile-picture-973460.svg";
import { AiOutlineLinkedin } from "react-icons/ai";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  border-radius: 6px;
  border: 1px solid transparent;
  padding: 20px 40px;
  min-width: 450px;
  &:hover {
    box-shadow: 0 0 10px rgb(0 0 0 / 10%);
    border: 1px solid #8da7ae;
    cursor: pointer;
  }
`;

const Portrait = styled.div`
  border-radius: 50%;
  height: 80px;
  width: 80px;
  background-image: url(${Picture});
  border: 1px solid #8da7ae;
  overflow: hidden;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  border-radius: 50%;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Name = styled.div`
  font-size: 1.7rem;
  font-weight: 600;
`;

const Title = styled.div`
  font-size: 1rem;
  font-weight: 400;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 4.5em;
  a {
    display: flex;
    align-items: center;
    color: #add0da;
  }
`;

export default ({ name, title, linkedIn, pic, className }) => {
  return (
    <Container>
      <Info>
        <Portrait>
          {pic && (
            <img src={pic} style={{ height: "100%", width: "100%" }}></img>
          )}
        </Portrait>
        <Description>
          <Name>{name}</Name>
          <Title>{title}</Title>
        </Description>
      </Info>
      <Links>
        {linkedIn && (
          <a target="_blank" href={`https://www.linkedin.com/in/${linkedIn}`}>
            <AiOutlineLinkedin />
          </a>
        )}
      </Links>
    </Container>
  );
};
