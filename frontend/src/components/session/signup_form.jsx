import { Wrapper, Container, Input } from "./login_form";
import { withRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ModalHeader } from "./login_form";
// const NewContainer = styled(Container)`
//   font-weight: 900;
//   background-color: hsla(90, 100%, 100%, 95%);
//   box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
// `;

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      password2: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.signup(user).then(() => {
      this.props.history.push("/restaurants");
    });
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <Wrapper>
        <Container className="signup-form-container">
          <ModalHeader>
            <h2>Sign up!</h2>
          </ModalHeader>
          <form onSubmit={this.handleSubmit}>
            <Input className="signup-form">
              <br />
              <input
                className="input-field"
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
              />
              <br />
              <input
                className="input-field"
                type="text"
                value={this.state.handle}
                onChange={this.update("username")}
                placeholder="Username"
              />
              <br />
              <input
                className="input-field"
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
              />
              <br />
              <input
                className="input-field"
                type="password"
                value={this.state.password2}
                onChange={this.update("password2")}
                placeholder="Confirm Password"
              />
              <br />
              <input
                className="submit-bttn"
                type="submit"
                value="Submit"
                onClick={this.handleSubmit}
              />
              {this.renderErrors()}
            </Input>
          </form>
        </Container>
      </Wrapper>
    );
  }
}

export default withRouter(SignupForm);
