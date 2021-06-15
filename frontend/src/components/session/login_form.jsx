import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
export const Wrapper = styled.div`
  width: 100vw;
  height: 50vw;
  display: flex;
  justify-content: center;
  border: solid green;
`;
export const Container = styled.div`
  width: 50vw;
  border: solid yellow;
  background: ${({ color = "pink" }) => color};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;

  &:hover {
    background: green;
  }
  `;
  export const Input = styled.div`
  display: flex;
  justify-content: space-between;
  height: 15rem;
  flex-direction: column;
  border: solid orange;
`;

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the Tweets page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/tweets");
    }

    // Set or clear errors
    this.setState({ errors: nextProps.errors });
  }

  // Handle field updates (called in the render method)
  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.login(user);
  }

  // Render the session errors if there are any
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
        <Container>
          <form onSubmit={this.handleSubmit}>
            <Input>
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
              />
              <br />
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
              />
              <br />
              <input type="submit" value="Submit" />
              {this.renderErrors()}
            </Input>
          </form>
        </Container>
      </Wrapper>
    );
  }
}

export default withRouter(LoginForm);
