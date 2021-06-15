import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { closeModal } from "../../actions/modal_actions";

const CloseButton = styled.button`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  position: absolute;
  right: 10px;
  top: 10px;
  overflow: hidden;
  /* &:after {
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
  } */
`;

const ModalBackdrop = styled.div`
  z-index: 900;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(244, 244, 244, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalChild = styled.div`
  position: relative;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 12px 28px 0 rgb(0, 0, 0, 0.2), 0 2px 4px 0 rgb(0, 0, 0, 0.1),
    inset 0 0 0 1px rgb(255, 255, 255, 0.5);
`;

export default () => {
  const Component = useSelector(({ ui: { modal } }) => modal);
  const dispatch = useDispatch();
  const close = () => dispatch(closeModal());
  return (
    Component && (
      <ModalBackdrop onClick={close}>
        <ModalChild onClick={(e) => e.stopPropagation()}>
          <Component />
          <CloseButton onClick={close}>
            <FontAwesomeIcon icon={faTimes} />
          </CloseButton>
        </ModalChild>
      </ModalBackdrop>
    )
  );
};
