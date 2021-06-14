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
  background: hsla(45, 50%, 50%, 20%);

  h1 {
    display: flex;
    justify-self: center;
    color: hsla(100, 60%, 45%, 90%);
    text-shadow: 1px 1px hsla(100, 80%, 0%, 10%);
    // font-family: 'Great Vibes', cursive;
    // border: solid purple;
  }

  ul {
    display: inline-block;
    justify-self: flex-end;
    // border: solid blue;

    li {
      display: inline-block;
      text-align: space-between;
      width: 100%;
      // border: solid orange;
      list-style: none;
      color: green;

      :active {
        color: green;
      }
    }
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
          <Link to={"/signup"}>Signup</Link>
          <Link to={"/login"}>Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <Wrapper>
        <h1>Waste Not</h1>
        <ul>
          <li>{this.getLinks()}</li>
        </ul>
      </Wrapper>
    );
  }
}

export default NavBar;
