import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { logout } from "../../actions/session_actions";

export default ({ children, className }) => {
  const dispatch = useDispatch();
  return (
    <button className={className} onClick={() => dispatch(logout())}>
      {children}
    </button>
  );
};
