import React from "react";
import styled from "styled-components";
import Banner from "../banner/banner";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;1,300;1,400&display=swap');
</style>;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 460px;
  overflow: hidden;
`;

const Name = styled.p`
  font-weight: 600;
  font-size: 1.4rem;
  text-transform: capitalize;
  text-shadow: 1px 1px hsla(0, 0%, 75%, 25%);
`;

class RestaurantEdit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }



    // componentWillMount() {
    //     this.props.fetchRestaurant(this.props.restaurantId)
    // }

    render() {
        const { restaurant } = this.props.restaurant;
        return (
            <Container>
                <Name>{restaurant.name}</Name>
            </Container>
        )
    }
}

export default RestaurantEdit;