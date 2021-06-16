import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import ShowMap from '../maps/show_map'

const Wrapper = styled.div`
  width: 100vw;
  height: 85vh;
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

// Mapwarpper unncessary, style should be applied directly to containerstyle attribute of Map component
const MapWrapper = styled.div`
    width: 50%;
    height: 100%;
    border: 1px solid grey;
`;

const Restaurant = () => {
    const [filter, setFilter] = useState(5)


    handleChange(e) {
        this.setState({filter: parseInt(e.target.value)})
    }

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
                    Restaurant Card
                </RestaurantCardsWrapper>
            </RestaurantWrapper>
            <MapWrapper>
                <ShowMap zoom={this.state.filter} locations={[]}/>
            </MapWrapper>
        </Wrapper>
    )
}

export default Restaurant;
