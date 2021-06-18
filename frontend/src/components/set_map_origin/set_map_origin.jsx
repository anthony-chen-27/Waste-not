import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { Button } from "./buttons";

import { receiveMapOrigin } from "../../actions/map_actions";

const Container = styled.div`
  display: flex;
  gap: 5px;
  width: 100%;
  padding: 10px;
  flex-wrap: wrap;
  outline: 1px solid purple;
`;

export default ({ className }) => {
  const dispatch = useDispatch();
  useEffect(
    () => dispatch(receiveMapOrigin({ lat: 37.773972, lng: -122.431297 })),
    [dispatch]
  );
  const setOrigin = (lat, lng) => () =>
    dispatch(receiveMapOrigin({ lat, lng }));
  return (
    <Container className={className}>
      <Button onClick={setOrigin(37.773972, -122.431297)}>San Francisco</Button>
      <Button onClick={setOrigin(34.0522, -118.2437)}>Los Angeles</Button>
      <Button onClick={setOrigin(41.8781, -87.6298)}>Chicago</Button>
      <Button onClick={setOrigin(40.7128, -74.006)}>New York</Button>
    </Container>
  );
};
