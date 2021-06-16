import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Logo from "../logo/logo";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 16px;
`;

export default ({ className }) => {
  return (
    <Container className={className}>
      <Logo></Logo>
    </Container>
  );
};
