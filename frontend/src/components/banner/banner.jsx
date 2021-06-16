import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Logo from "../logo/logo";
import SiteName from "../logo/site_name";

import Controls from "./controls";
import Panel from "./center_panel";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 16px;
  position: relative;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2.7rem;
  cursor: pointer;
`;

const CenterPanel = styled(Panel)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border: 0;
`;

export default ({ className }) => {
  const history = useHistory();
  return (
    <Container className={className}>
      <Title onClick={() => history.replace("/")}>
        <Logo />
        <SiteName />
      </Title>
      <CenterPanel />
      <Controls />
    </Container>
  );
};
