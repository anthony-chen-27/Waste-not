import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { openModal } from "../../actions/modal_actions";
import SignupForm from "./signup_form_container";

export default ({ children, className }) => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(openModal(() => <SignupForm />));
  };
  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
};
