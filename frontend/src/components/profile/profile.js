import React from "react";
import styled from "styled-components";
import Banner from "../banner/banner";
import { Redirect } from 'react-router-dom';
import RestaurantEdit from "../restaurant/restaurant_edit";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;1,300;1,400&display=swap');
</style>;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Wrapper = styled.div`
    position: absolute;
    top: 10vh;
    display: flex;
    height: 90vh;
    width: 100vw;
    justify-content: space-around;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  height: 50%;
  padding-top: 8rem;
  h1, h2 {
    font-size: 2rem;
    font-family: "Rubik", sans-serif;
    font-stretch: extra-condensed;
    font-weight: 100;
    color: rgba(0, 0, 0, 0.2);
    text-transform: capitalize;
  }
  h2 {
    font-size: 1rem;
    text-decoration: underline;
  }
`;


const FixedBanner = styled(Banner)`
  position: absolute;
  height: 10vh;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ProfileRestaurants = styled.ul`
    gap: 10px;
    display: flex;
    flex-direction: column;
`;

const RestaurantCard = styled.li`
  display: flex;
  border: 1px solid #eeeeef;
  border-radius: 4px;
  transition: box-shadow 0.3s;
  justify-content: space-between;
  &:hover {
    box-shadow: 0 0 10px rgb(0 0 0 / 10%);
  }
  cursor: pointer;
  padding: 10px;
  width: calc(100% - 20px);
  gap: 10px;
`;

const Name = styled.p`
  font-weight: 600;
  font-size: 1.4rem;
  text-transform: capitalize;
  text-shadow: 1px 1px hsla(0, 0%, 75%, 25%);
`;

const FoodButton = styled.a`
  border: 1px solid #eeeeef;
  border-radius: 4px;
  transition: box-shadow 0.3s;
  justify-content: space-between;
  font-family: inherit;
  background-color: lightgrey;
  &:hover {
    box-shadow: 0 0 5px rgb(0 0 0 / 10%);
  }
  cursor: pointer;
  padding: 5px;
  gap: 10px;
  width: 2rem;
  font-size: 10px;
`;

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentWillMount() {
    console.log(this.props.currentUser.id);
    this.props.fetchProfile(this.props.currentUser.id);
  }

  handleClick(restaurant) {
    return e => {e.preventDefault();
    this.props.openModal(() => <RestaurantEdit restaurant={restaurant} />)}
  }

  render() {
    let { username, restaurants } = this.props.profile
    return (
      <Container>
        <FixedBanner />
        <Wrapper>
            { restaurants ? 
            (
              <ProfileWrapper>
              <h1> Welcome, {username} </h1>
              <h2> Your restuarants </h2>
              <ProfileRestaurants>
                { restaurants.length > 0 ? 
                restaurants.map(restaurant => {
                  return (
                  <RestaurantCard onClick={this.handleClick({restaurant})}>
                    <Name>{restaurant.name}</Name>
                  </RestaurantCard> 
                  )
                }) 
                : null }
              </ProfileRestaurants>
              </ProfileWrapper>
              ) : <ProfileWrapper>
                <h1> Welcome, {username} </h1>
                <p>You do not own any restaurants.</p>
                </ProfileWrapper> }
          </Wrapper>
      </Container>
    )
  }
}

export default Profile;
