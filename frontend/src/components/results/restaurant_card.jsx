import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const SQUARECOLORS = ['#E7F9FE', '#F5FDFF', '#8DA7AE', '#636768']

const Container = styled.div`
  display: flex;
  border: 1px solid #eeeeef;
  border-radius: 4px;
  transition: box-shadow 0.3s;
  justify-content: space-between;
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
`;

const DateField = styled.div`
  font-weight: 300;
`;

const Description = styled.div`
  font-weight: 100;
`;

const FoodItems = styled.ul`
  font-weight: 100;
  font-size: 10px;
  align-self: center;
  display: flex;
  gap: 5px;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: center;
  }
`;

const Circle = styled.li`
    background: #E7F9FE;
    width: 60px;
    height: 60px;
    border-radius: 4px;
    align-content: center;
    justify-content: space-around;
    flex-direction: column;
    display: flex;
    padding: 5px;
    // margin-left: 5px;
    border: 0.5px dotted black;
    &:hover {
      box-shadow: 0px 1px 3px grey;
    }
    p {
      font-size: 30px;
      font-weight: 700;
    }
    span {
      font-size: 8px;
      text-transform: capitalize;
    }
`;

const RestaurantInfo = styled.div``;

export default ({ restaurant, id }) => {
  const { name, date, description, foodItems } = restaurant;
  return (
    <Container onClick={() => {console.log(id)}}>
      <RestaurantInfo>
        <Name>{name}</Name>
        <DateField>{new Date(date).toLocaleDateString("en-US")}</DateField>
        <Description>{description}</Description>
      </RestaurantInfo>
      <FoodItems>{foodItems.map(item => {
        if (item.servings > 0) 
        return <Circle>
          <p>{item.servings}</p> 
          <span>{item.name}{(item.servings > 1 && item.name.split('').slice(-1)[0].toUpperCase() !== 'S') ? 's': ''}</span>
          </Circle>
        })}</FoodItems>
    </Container>
  );
};
