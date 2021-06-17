import React from "react";
import "./navbar.css";
import styled from "styled-components";
import { Parallax } from "react-parallax";


import Logo from '../logo/logo';
import SiteName from '../logo/site_name';
import OpenSignUpModal from "../session/open_signup_modal";
import OpenLoginModal from "../session/open_login_modal";

export const LOWrapper = styled.div`
  display: grid;
  padding-right: 1rem;
  height: 70vh;
  // background: url("https://soyummy.com/wp-content/uploads/2019/06/hands-off-restaurant.jpg");
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
    padding-top: 23rem;
    padding-right: 1rem;
    text-align: end;
    justify-content: flex-end;
    list-style: none;

    .signup-modal,
    .login-modal {
      color: hsla(0, 100%, 100%, 90%);
      text-decoration: none;
      border: none;
      background: transparent;
      cursor: pointer;
      font-size: 22px;
      font-family: inherit;
      text-shadow: 2px 2px hsla(100, 80%, 0%, 10%);
      letter-spacing: 0.7px;
      list-style: none;

      :hover {
        // border-bottom: 1.5px solid hsla(0, 80%, 100%, 20%);
        background: hsla(0, 100%, 100%, 23%);
        border-radius: 2px;
        transition: 0.25s;
        // color: hsla(193, 17%, 62%, 80%);
        color: hsla(193, 92%, 95%, 100%);
        // color: hsla(0, 100%, 100%, 55%);
        // color: hsl(0, 100%, 100%);
      }
    }
  }
`;


export const LIWrapper = styled.div`
  // border: solid blue;
  background: hsla(0, 80%, 40%, 40%);
  height: 10vh;

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
              <OpenSignUpModal className="signup-modal">Signup</OpenSignUpModal>
            </li>
            <li>
              <OpenLoginModal className="login-modal">Login</OpenLoginModal>
            </li>
          </ul>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Parallax bgImage="https://soyummy.com/wp-content/uploads/2019/06/hands-off-restaurant.jpg" strength={200}>
        {!this.props.loggedIn && (
          <LOWrapper>
            <h1>
              {/* <a href="#">Waste Not</a> */}
              <a href="#"><SiteName/></a>
            </h1>
            {this.getLinks()}
          </LOWrapper>
        )}
        </Parallax>
      </div>
    );
  }
}

export default NavBar;
