import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { openModal } from "../../actions/modal_actions";
import Roster from "../credits/roster";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border: 1px solid #e7f9fe;
  background-color: #f5fdff;
  color: #add0da;
  &:after {
    display: block;
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
  }
  &:hover:after {
    background-color: rgba(0, 0, 0, 0.05);
  }
  transition: all 0.02s ease-in-out;
  &:active {
    transform: scale(0.97);
  }
`;

export const RoundButton = styled(Button)`
  border-radius: 50%;
  height: ${({ height = "7vh" }) => height};
  width: ${({ height = "7vh" }) => height};
  font-size: 1.8em;
`;

export const NavButton = styled(Button)`
  border-radius: 6px;
  height: ${({ height = "7vh" }) => height};
  width: ${({ width = "300px" }) => width};
  font-size: 4em;
`;

export const Credits = ({ children, className }) => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(openModal(() => <Roster />));
  };
  return (
    <NavButton className={className} onClick={handleClick}>
      {children}
    </NavButton>
  );
};
