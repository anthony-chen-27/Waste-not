import React from "react";
import styled from "styled-components";
import Banner from "../banner/banner";
import { Redirect } from 'react-router-dom';

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
    align-items: center;
    justify-content: space-around;
`;

const ProfileWrapper = styled.div`
  display: flex;
  
`;


const FixedBanner = styled(Banner)`
  position: absolute;
  height: 10vh;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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

  componentWillReceiveProps(newState) {
  }

  render() {
    let { username, restaurants } = this.props.profile
    return (
      <Container>
        <FixedBanner />
        <Wrapper>
            { restaurants ? 
            (
              <div>
              <h1> Hello, {username}</h1>
              <ul>
                { restaurants.length > 0 ? 
                restaurants.map(restaurant => {
                  return (
                  <RestaurantCard>
                    <Name>{restaurant.name}</Name>
                  </RestaurantCard> 
                  )
                }) 
                : null }
              </ul>
              </div>
              ) : null }
          </Wrapper>
      </Container>
    )
  }
}

export default Profile;
