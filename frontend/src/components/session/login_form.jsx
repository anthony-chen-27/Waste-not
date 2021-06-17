import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Signika:wght@300;400;500&display=swap');
</style>;

export const Wrapper = styled.div`
  width: 100%;
  height: 50vw;
  max-height: 400px;
  max-width: 500px;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 50vw;
  // background: hsla(193, 20%, 55%, 40%);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  box-shadow: 0 2px 3px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  animation: mymove 7.5s infinite;
  
  @keyframes mymove {
    0% {background: hsla(193, 20%, 55%, 40%);}
    30% {background: hsla(299, 10%, 50%, 20%);}
    50% {background: hsla(39, 70%, 60%, 30%);}
    70% {background: hsla(299, 10%, 50%, 20%);}
    100% {background: hsla(193, 20%, 55%, 40%);}
  }
}
`;

export const ModalHeader = styled.div`
display: flex;
justify-content: center;
height: 100%;
font-size: 24px;
letter-spacing: 0.6px;
color: hsl(0, 0%, 30%);
text-shadow: 1px 1px hsl(0, 0%, 75%);
// outline: solid red;

h2 {
  align-self: center;
}
`;

export const Input = styled.div`
display: flex;
justify-content: center;
height: 17rem;
flex-direction: column;
padding-left: 4px;
padding-right: 4px;
// padding-bottom: 5px;
// row-gap: 5px;
// outline: solid orange;

  input {
    height: 2.5rem;
    border-radius: 1em;
    border: 1px dashed hsla(30, 100%, 70%, 60%);
    padding-left: 12px;
    letter-spacing: 1px;
    font-family: "Signika", sans-serif;
    // outline: solid blue;
  }
  .input-field {
    :hover {
      background: hsla(0, 10%, 100%, 80%);
    }

    :focus {
      outline: none;
    }
  }

  .submit-bttn {
    cursor: pointer;
    color: hsl(0, 0%, 30%);
    // background: hsla(0, 10%, 90%, 100%);
    margin-bottom: 1.5em;

    :hover {
      background: hsl(165, 38%, 95%);
    }

    :active {
      background: hsla(33, 85%, 70%, 80%);
      // background: hsla(0, 50%, 90%, 50%);
    }
  }
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
    this.demoUser = this.demoUser.bind(this);
  }

  demologin(e) {
    e.preventDefault();
    let user = {
      email: "pokemon@gmail.com",
      password: "pokemon",
    };

    this.props.login(user);
  }
  // Once the user has been authenticated, redirect to the Restaurant page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/restaurant");
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

  demoUser(e) {
    e.preventDefault();
    const demo = { email: "pokemon@gmail.com", password: "pokemon" };
    this.props.login(demo);
  }

  render() {
    return (
      <Wrapper>
        <Container>
          <ModalHeader>
            <h2>Welcome back!</h2>
          </ModalHeader>
          <form onSubmit={this.handleSubmit}>
            <Input>
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
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
              />
              <br />
              <input className="submit-bttn" type="submit" value="Submit" />
              <input
                className="submit-bttn"
                type="submit"
                value="Demo User"
                onClick={this.demoUser}
              />
              {this.renderErrors()}
            </Input>
          </form>
        </Container>
      </Wrapper>
    );
  }
}

export default withRouter(LoginForm);
