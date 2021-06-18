import React from "react";
import "./navbar.css";
import styled from "styled-components";
import { Parallax } from "react-parallax";
import SiteName from "../logo/site_name";
import OpenSignUpModal from "../session/open_signup_modal";
import OpenLoginModal from "../session/open_login_modal";

export const Wrapper = styled.div`
  height: 70vh;

  h1 {
    position: relative;
    width: 100%;
    top: 15%;
    text-align: center;
  }
`;

export const LoginLinks = styled.ul`
  display: flex;
  list-style: none;
  position: absolute;
  bottom: 20px;
  right: 20px;
  gap: 5px;
  padding: 1.5px;

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
    letter-spacing: 0.9px;
    list-style: none;

    :hover {
      background: hsla(0, 100%, 100%, 22%);
      border-radius: 3px;
      transition: 0.25s;
      color: hsla(193, 92%, 95%, 100%);
      box-shadow: 1px 1px hsla(0, 0%, 30%, 10%);
    }
  }
`;

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.getLinks = this.getLinks.bind(this);
  }

  getLinks() {
    return (
      <div>
        <LoginLinks>
          <li>
            <OpenSignUpModal className="signup-modal">Signup</OpenSignUpModal>
          </li>
          <li>
            <OpenLoginModal className="login-modal">Login</OpenLoginModal>
          </li>
        </LoginLinks>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Parallax
          bgImage="https://soyummy.com/wp-content/uploads/2019/06/hands-off-restaurant.jpg"
          strength={350}
        >
          {!this.props.loggedIn && (
            <Wrapper>
              <h1>
                <a href="#">
                  <SiteName />
                </a>
              </h1>
              {this.getLinks()}
            </Wrapper>
          )}
        </Parallax>
      </div>
    );
  }
}

export default NavBar;
