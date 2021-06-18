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
  border-radius: 6px;
  padding: 4px;
  width: 100%;
  max-width: 150px;
  font: inherit;
  color: inherit;
  background-color: #f5fdff;
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
