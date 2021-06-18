import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

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

const Controls = ({ className }) => {
  const dispatch = useDispatch();
  const hist = useHistory();
  return (
    <Container className={className}>
      <RoundButton onClick={() => {hist.replace('/new_restaurant')}}>
        <FiPlusCircle />
      </RoundButton>
      <RoundButton onClick={() => {hist.replace('/profile')}}>
        <CgProfile />
      </RoundButton>
      <RoundButton onClick={() => dispatch(logout())}>
        <FiLogOut />
      </RoundButton>
    </Container>
  );
};

export default Controls
