import React from "react";
import styled from "styled-components";
import Card from "./restaurant_card";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 12px;
`;

export default (props) => {
  return (
    <Container>
      {props.restaurants.map((restaurant) => (
        <Card key={restaurant._id} restaurant={restaurant} />
      ))}
    </Container>
  );
};
