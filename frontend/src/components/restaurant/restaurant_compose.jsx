import React from "react";
import styled from "styled-components";
import Banner from "../banner/banner";
import PostMap from "../maps/post_map";
import { createRestaurant } from "../../actions/restaurant_actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;1,300;1,400&display=swap');
</style>;

const Container = styled.div`
  //   position: relative;
  display: flex;
  flex-direction: column;
  //   height: 100vh;
  //   width: 100vw;
  outline: 1px solid green;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 10vh;
  display: flex;
  height: 90vh;
  width: 100vw;
  outline: 1px solid pink;
`;

const MapWrapper = styled.div`
  height: 100%;
  width: 70vw;
  //   width: 70vw;
  outline: 1px solid teal;
`;

const FixedBanner = styled(Banner)`
  position: absolute;
  height: 10vh;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  outline: 1px solid purple;
`;

const FormWrapper = styled.div`
  height: 100%;
  width: 30vw;
  outline: 1px solid orange;
  font-family: "Rubik", sans-serif;
  color: hsl(0, 0%, 22%);
  //   font-size: 16.5px;
  display: flex;
  justify-content: center;

  form {
    // online: 1px solid green;
    display: flex;
    height: 90%;
    // width: 20em;
    flex-direction: column;
    align-items: center;
    padding-top: 5%;

    input[type="submit"] {
      width: 50%;
      height: 5%;
      max-width: 110px;
      margin-top: 20px;
      background-color: hsla(30, 100%, 70%, 50%);
      border-radius: 10px;

      &:hover {
        background-color: hsla(30, 100%, 70%, 80%);
        cursor: pointer;
      }

      &:active {
        background-color: hsla(30, 100%, 70%, 100%);
      }
    }

    p {
      //   outline: 1px solid green;
      width: 78%;
      margin-bottom: 8px;
      font-size: 15.5px;
      background: hsla(193, 17%, 62%, 45%);
      color: hsl(0, 0%, 100%);
      text-shadow: 2px 2px hsla(0, 0%, 70%, 30%);
      border-radius: 16px;
      padding: 7px 9px;
      line-height: 1.5;
    }

    .form-inputs {
      //   outline: 1px solid blue;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 90%;
      height: 40%;
      justify-content: space-around;

      input,
      textarea {
        // padding: 0.2rem;
        resize: none;
        font-family: inherit;
        width: 90%;
        border: 1px dashed hsla(30, 100%, 70%, 90%);
        border-radius: 3px;

        :hover {
          background: hsla(193, 17%, 62%, 3%);
        }

        &:focus {
          outline: none;
        }
      }

      input {
        // outline: 1px solid pink;
        height: 1.8rem;
        padding: 0 0.3rem;
      }

      textarea {
        // outline: 1px solid purple;
        height: 10rem;
        // padding-left: 5px;
        padding: 0.3rem;
      }

      .categories-wrapper {
        // outline: 1px solid orange;
        width: 90%;
        align-items: center;
        justify-content: center;
        padding-top: 10px;

        select {
            // outline: 1px solid green;
            width: 100%;
            max-width: 100px;
            // position: relative;
        }
      }
    }
  }
`;

class RestaurantCompose extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            location: null,
            category: 'food',
            ownerId: this.props.currentUserId
        }
        this.changeLoc = this.changeLoc.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
    }

  handleSubmit(e) {
    e.preventDefault();
    const { name, description, location } = this.state;
    if (name === "" || description === "" || !location) {
      return;
    } else {
      // Should post and then redirect somewhere
      this.props.createRestaurant(this.state);
      this.props.history.push("/restaurants");
    }
  }

  changeLoc(val) {
    this.setState({ location: val });
  }

  updateField(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  update(e) {
    console.log(e.target.value);
    this.setState({ category: e.target.value });
  }

  render() {
    return (
      <Container>
        <FixedBanner />
        <Wrapper>
          <MapWrapper>
            <PostMap
              style={{ height: "90vh", width: "70%" }}
              action={this.changeLoc}
              markerType={this.state.category}
            />
          </MapWrapper>
          <FormWrapper>
            <form>
              <p>
                Double click on the map to add a marker, drag marker to adjust
              </p>
              <div className="form-inputs">
                <input
                  type="text"
                  placeholder="Restaurant Name"
                  value={this.state.name}
                  onChange={this.updateField("name")}
                />
                <textarea
                  placeholder="Description"
                  onChange={this.updateField("description")}
                  value={this.state.description}
                ></textarea>
                <div className="categories-wrapper" style={{ display: "flex" }}>
                  <span style={{ marginRight: "10px" }}>Categories:</span>
                  <select name="category" onChange={this.update}>
                    <option value="food">Surprise</option>
                    <option value="fv">{"Fruits & Vegetables"}</option>
                    <option value="mfp">{"Meat, Fish, & Poultry"}</option>
                    <option value="bread">Bread & Pastries</option>
                  </select>
                </div>
              </div>
              <input type="submit" onClick={this.handleSubmit} />
            </form>
          </FormWrapper>
        </Wrapper>
      </Container>
    );
  }
}


const mSTP = state => (
    {
        currentUserId: state.session.user.id
    }
)

export default withRouter(connect(mSTP, {createRestaurant})(RestaurantCompose))

