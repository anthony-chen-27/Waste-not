import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { CgProfile } from "react-icons/cg";
import { FiLogOut, FiPlusCircle } from "react-icons/fi";

import { RoundButton } from "./buttons";
import { logout } from "../../actions/session_actions";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export default ({ className }) => {
  const dispatch = useDispatch();
  return (
    <Container className={className}>
      <RoundButton>
        <FiPlusCircle />
      </RoundButton>
      <RoundButton>
        <CgProfile />
      </RoundButton>
      <RoundButton onClick={() => dispatch(logout())}>
        <FiLogOut />
      </RoundButton>
    </Container>
  );
};
