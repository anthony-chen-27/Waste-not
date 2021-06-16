import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import WasteNot from "./Waste_Not.svg";

export default ({ className }) => {
  return <img src={WasteNot}></img>;
};
