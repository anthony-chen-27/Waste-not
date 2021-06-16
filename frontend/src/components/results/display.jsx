import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { fetchRestaurants } from "../../actions/restaurant_actions";
import Card from "./restaurant_card";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 12px;
`;

export default () => {
  const dispatch = useDispatch();

  const restaurants = useSelector(({ entities: { restaurants } }) =>
    Object.values(restaurants)
  );

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  return (
    <Container>
      {restaurants.map((restaurant) => (
        <Card key={restaurant._id} restaurant={restaurant} />
      ))}
    </Container>
  );
};
