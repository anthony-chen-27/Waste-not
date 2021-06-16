import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { GiFoodTruck } from "react-icons/gi";

export default ({ className }) => {
  return (
    <GiFoodTruck
      className={className}
      style={{ color: "#ADD0DA" }}
    ></GiFoodTruck>
  );
};
