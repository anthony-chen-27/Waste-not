import React from "react";
import styled from "styled-components";

import Card from "./business_card";

import Anthony from "./anthony.jpeg";
import Kaz from "./kaz.jpeg";
import Roger from "./roger.jpeg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 460px;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  border-bottom: 1px solid #8da7ae;
  width: 100%;
`;

const TitleText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  font-size: 3rem;
  font-weight: 600;
  color: #8da7ae;
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 5px; */
  padding: 10px;
  padding: 20px 30px 30px;
`;

export default ({ className }) => {
  return (
    <Container>
      <Header>
        <TitleText>
          <span>Engineering</span>
        </TitleText>
      </Header>
      <Panel>
        <Card
          name="Anthony Chen"
          title="Lead"
          linkedIn="anthony-c-b8250b126"
          pic={Anthony}
        ></Card>
        <Card
          name="Jennifer Tran"
          title="Frontend"
          linkedIn="jennifer-tran-05a144215"
        ></Card>
        <Card
          name="Kaz Debear"
          title="Backend"
          linkedIn="kaz-debear-66a6b8172"
          pic={Kaz}
        ></Card>
        <Card
          name="Roger Yang"
          title="Flex"
          linkedIn="roger-y-a35595114"
          pic={Roger}
        ></Card>
      </Panel>
    </Container>
  );
};
