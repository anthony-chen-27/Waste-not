import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { GiFoodTruck } from "react-icons/gi";

import WasteNot from "./Waste Not.svg";

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export default ({ className }) => {
  return (
    <Container>
      <GiFoodTruck
        className={className}
        style={{ fontSize: "3rem", color: "#de530f" }}
      ></GiFoodTruck>
      <img src={WasteNot}></img>
    </Container>
  );
};
