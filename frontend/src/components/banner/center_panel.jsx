import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

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

export default ({ className }) => {
  return (
    <Container className={className}>
      <Credits>
        <FaRegHandshake/>
      </Credits>
    </Container>
  );
};
