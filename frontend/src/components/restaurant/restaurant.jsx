import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../actions/modal_actions";

import Banner from "../banner/banner";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const FixedBanner = styled(Banner)`
  position: absolute;
  height: 56px;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.div`
  position: absolute;
  top: 57px;
  width: 98.5vw;
  height: 88vh;
  border: 1px solid green;
  display: flex;
`;

const RestaurantWrapper = styled.div`
  width: 50%;
  border: 1px solid blue;
`;

const RestaurantFilterWrapper = styled.div`
  width: 100%;
  height: 15%;
  border: 1px solid red;
`;

const RestaurantCardsWrapper = styled.div`
  width: 100%;
  height: 85%;
  border: 1px solid orange;
`;

const MapWrapper = styled.div`
  width: 50%;
  height: 100%;
  border: 1px solid grey;
`;

const Restaurant = () => {
  const dispatch = useDispatch();

  // need to close the modal if the user is
  // being redirected here by a modal dialog
  useEffect(() => {
    dispatch(closeModal());
  }, [dispatch]);

  return (
    <Container>
      <FixedBanner />
      <Wrapper>
        <RestaurantWrapper>
          <RestaurantFilterWrapper>Filter</RestaurantFilterWrapper>
          <RestaurantCardsWrapper>Restaurant Card</RestaurantCardsWrapper>
        </RestaurantWrapper>
        <MapWrapper>Map</MapWrapper>
      </Wrapper>
    </Container>
  );
};

export default Restaurant;
