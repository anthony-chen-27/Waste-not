import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { receiveSelectedRestaurant } from "../../actions/map_actions";
import dist from "./haversine";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #eeeeef;
  border-radius: 4px;
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0 0 10px rgb(0 0 0 / 10%);
  }
  cursor: pointer;
  padding: 10px;
  width: calc(100% - 20px);
  gap: 10px;
`;

const Name = styled.div`
  font-weight: 600;
  font-size: 1.4rem;
  text-transform: capitalize;
  text-shadow: 1px 1px hsla(0, 0%, 75%, 25%);
`;

const DateField = styled.div`
  font-weight: 300;
`;

const Description = styled.div`
  font-weight: 100;
`;

const Miles = styled.span`
  font-weight: 100;
  font-size: 1rem;
`;

export default ({ restaurant, id }) => {
  const { _id, name, date, description, location } = restaurant;
  const dispatch = useDispatch();
  const mapOrigin = useSelector(({ ui }) => ui.map.origin);
  return (
    <Container
      onMouseEnter={() => {
        dispatch(receiveSelectedRestaurant(_id));
      }}
    >
      <Name>{name}</Name>
      <Miles>
        {dist(mapOrigin, location).toLocaleString(undefined, {
          maximumFractionDigits: 1,
        })}{" "}
        Miles
      </Miles>
      <DateField>{new Date(date).toLocaleDateString("en-US")}</DateField>
      <Description>{description}</Description>
    </Container>
  );
};
