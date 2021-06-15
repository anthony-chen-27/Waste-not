import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
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
    height: 100%
    border: 1px solid grey;
`;

const Restaurant = () => {
    return (
        <Wrapper>
            <RestaurantWrapper>
                <RestaurantFilterWrapper>
                    Filter
                </RestaurantFilterWrapper>
                <RestaurantCardsWrapper>
                    Restaurant Card
                </RestaurantCardsWrapper>
            </RestaurantWrapper>
            <MapWrapper>
                Map
            </MapWrapper>
        </Wrapper>
    )
}

export default Restaurant;
