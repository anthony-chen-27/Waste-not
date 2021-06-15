import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import styled from "styled-components";

export const LOWrapper = styled.div`
  display: grid;
  padding-right: 1rem;
  height: 70vh;
  background: url("https://soyummy.com/wp-content/uploads/2019/06/hands-off-restaurant.jpg");
  background-size: cover;

  h1 {
    display: flex;
    justify-self: center;
    padding-top: 3rem;
    font-size: 40px;

    a {
      color: hsla(0, 100%, 100%, 85%);
      text-shadow: 2px 2px hsla(100, 80%, 0%, 10%);
      letter-spacing: 1px;
      text-decoration: none;
    }
  }

  ul {
    display: flex;
    padding-top: 19rem;
    padding-right: 1rem;
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

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:active {
    color: hsla(0, 100%, 100%, 75%);
  }
`;

export const LIWrapper = styled.div`
  // border: solid blue;
  background: hsla(0, 80%, 40%, 40%);
  height: 5rem;
  
  ul {
    list-style: none;
    text-align: right;
    padding-right: 1rem;
  }

  .logout-bttn {
    color: white;
    text-decoration: none;
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 20px;
    font-family: inherit;
    text-shadow: 2px 2px hsla(100, 80%, 0%, 10%);
    letter-spacing: 0.7px;

    &:active {
      color: hsla(0, 100%, 100%, 75%);
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
          <ul>
            <li>
              <button className="logout-bttn" onClick={this.logoutUser}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <ul>
            <li>
              <StyledLink to={"/signup"}>Signup</StyledLink>
            </li>
            <li>
              <StyledLink to={"/login"}>Login</StyledLink>
            </li>
          </ul>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.props.loggedIn ? (
          <LIWrapper>
            {this.getLinks()}
          </LIWrapper>
        ) : (
          <LOWrapper>
            <h1>
              <a href="#">Waste Not</a>
            </h1>
            {this.getLinks()}
          </LOWrapper>
        )}
      </div>
    );
  }
}

export default NavBar;
