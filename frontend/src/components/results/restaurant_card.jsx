import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #eeeeef;
  border-radius: 4px;
  transition: box-shadow 0.3s;
  box-shadow: 0 0 10px rgb(0 0 0 / 10%);
  cursor: pointer;
`;

