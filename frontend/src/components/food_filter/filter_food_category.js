import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { Button } from "./buttons";

import {
  receiveFoodCategory,
  clearFoodCategory,
} from "../../actions/food_actions";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  padding: 10px;
  flex-wrap: wrap;
  border-right: 1.5px solid hsla(0, 0%, 80%, 15%);
`;

export default ({ className }) => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    if (e.target.value === "all") {
      dispatch(clearFoodCategory());
    } else {
      dispatch(receiveFoodCategory(e.target.value));
    }
  };
  return (
    <Container className={className}>
      <select name="category" onChange={handleChange}>
        <option value="all">All</option>
        <option value="food">Surprise</option>
        <option value="fv">{"Fruits & Vegetables"}</option>
        <option value="mfp">{"Meat, Fish, & Poultry"}</option>
        <option value="bread">Bread & Pastries</option>
      </select>
    </Container>
  );
};
