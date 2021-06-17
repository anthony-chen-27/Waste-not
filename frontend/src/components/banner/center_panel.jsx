import React from "react";
import styled from "styled-components";

import { FaRegHandshake } from "react-icons/fa";

import { Credits } from "./buttons";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-size: inherit;
  border: 0;
`;

const CenterPanel = ({ className }) => {
  return (
    <Container className={className}>
      <Credits>
        <FaRegHandshake/>
      </Credits>
    </Container>
  );
};

export default CenterPanel
