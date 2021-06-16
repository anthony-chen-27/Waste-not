import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import ShowMap from '../maps/show_map'
import { fetchRestaurants } from "../../actions/restaurant_actions";
import Display from '../results/display'

const Wrapper = styled.div`
  height: 90vh;
  display: flex;
`;

const RestaurantWrapper = styled.div`
  width: 50%;
  outline: 1px solid blue;
`;

const RestaurantFilterWrapper = styled.div`
  width: 100%;
  height: 15%;
  outline: 1px solid red;
`;

const RestaurantCardsWrapper = styled.div`
  width: 100%;
  height: 85%;
  outline: 1px solid orange;
  overflow-y: scroll;
`;


const Restaurant = () => {
    const MI_TO_GEO = (1/60)
    const dispatch = useDispatch();
    const restaurants = useSelector(({ entities: { restaurants } }) => Object.values(restaurants));
    useEffect(() => {
        dispatch(fetchRestaurants());
    }, [dispatch]);

    // need to close the modal if the user is
    // being redirected here by a modal dialog
    useEffect(() => {
        dispatch(closeModal());
    }, [dispatch]);

    const [filter, setFilter] = useState(5)
    const [center, setCenter] = useState({lat: 37.773972, lng: -122.431297})

    const allowedgeo = [center.lat + filter * MI_TO_GEO, center.lat - filter * MI_TO_GEO, center.lng + filter * MI_TO_GEO, center.lng - filter * MI_TO_GEO ]

    const allowedrest = restaurants.filter((res) => {return res.location.latitude <= allowedgeo[0] && res.location.latitude >= allowedgeo[1] && res.location.longitude <= allowedgeo[2] && res.location.longitude >= allowedgeo[3] })
    return (
        <Wrapper>
            <RestaurantWrapper>
                <RestaurantFilterWrapper>
                    <ul style={{listStyle: 'none'}}>
                        <p>Distance</p>
                        <li><input type="radio" checked={filter === 5} value={5} onChange={(e) => setFilter(parseInt(e.target.value))}/>5 mi</li>
                        <li><input type="radio" checked={filter === 10} value={10} onChange={(e) => setFilter(parseInt(e.target.value))}/>10 mi</li>
                        <li><input type="radio" checked={filter === 25} value={25} onChange={(e) => setFilter(parseInt(e.target.value))}/>25 mi</li>             
                    </ul>
                </RestaurantFilterWrapper>
                <RestaurantCardsWrapper>
                    <Display restaurants={allowedrest}/>
                </RestaurantCardsWrapper>
            </RestaurantWrapper>
            <ShowMap style={{width: '50%', height: '90vh'}} zoom={filter} locations={allowedrest.map((rest) => {return {lat: rest.location.latitude, lng: rest.location.longitude}})} containerStyle={{}} setCenter={setCenter}/>
        </Wrapper>
    )
}

export default Restaurant;
