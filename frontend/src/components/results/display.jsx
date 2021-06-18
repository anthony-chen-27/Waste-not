import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import Card from "./restaurant_card";
import dist from "./haversine";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 12px;
`;

export default (props) => {
  const o = useSelector(({ ui }) => ui.map.origin);
  props.restaurants.sort((a, b) => dist(o, a.location) - dist(o, b.location));
  return (
    <Container>
      {props.restaurants.map((restaurant) => (
        <Card
          key={restaurant._id}
          restaurant={restaurant}
          id={restaurant._id}
        />
      ))}
    </Container>
  );
};
