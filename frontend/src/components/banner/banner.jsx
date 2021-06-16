import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Logo from "../logo/logo";
import SiteName from "../logo/site_name";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 16px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2.7rem;
`;

export default ({ className }) => {
  return (
    <Container className={className}>
      <Title>
        <Logo />
        <SiteName />
      </Title>
    </Container>
  );
};
