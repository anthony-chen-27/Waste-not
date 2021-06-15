import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import styled from "styled-components";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
</style>;

export const Wrapper = styled.div`
  display: grid;
  padding-right: 1rem;
  // border: solid grey;
  // background: hsla(45, 50%, 50%, 20%);
  height: 70vh;
  background: url("https://soyummy.com/wp-content/uploads/2019/06/hands-off-restaurant.jpg");
  background-size: cover;

  h1 {
    display: flex;
    justify-self: center;
    padding-top: 3rem;
    font-size: 40px;
    // color: hsla(100, 60%, 45%, 90%);
    color: hsla(0, 100%, 100%, 85%);
    text-shadow: 2px 2px hsla(100, 80%, 0%, 10%);
    // font-family: 'Great Vibes', cursive;
    // border: solid purple;
    letter-spacing: 1px;
  }

  ul {
    display: flex;
    padding-top: 18rem;
    text-align: end;
    // border: solid blue;
    justify-content: flex-end;

    li {
      display: flex;
      width: 70px;
      justify-content: flex-end;
      // border: solid orange;
      list-style: none;
      color: hsla(0, 100%, 100%, 85%);
      font-size: 20px;
      text-shadow: 2px 2px hsla(100, 80%, 0%, 10%);
      letter-spacing: 0.8px;
    }
  }
`;

// const StyledH1 = styled(h1)`

// `;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:active {
    color: hsla(0, 100%, 100%, 75%);
  }
`;

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div>
          <Link to={"/tweets"}>All Tweets</Link>
          <Link to={"/profile"}>Profile</Link>
          <Link to={"/new_tweet"}>Write a Tweet</Link>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <ul>
            <li><StyledLink to={"/signup"}>Signup</StyledLink></li>
            <li><StyledLink to={"/login"}>Login</StyledLink></li>
          </ul>
        </div>
      );
    }
  }

  render() {
    return (
      <Wrapper>
        <h1>Waste Not</h1>
        {this.getLinks()}
      </Wrapper>
    );
  }
}

export default NavBar;
