import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { fetchRestaurants } from "../../actions/restaurant_actions";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  return <div>Results</div>;
};
