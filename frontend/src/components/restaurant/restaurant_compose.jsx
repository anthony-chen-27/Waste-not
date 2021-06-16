import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Banner from "../banner/banner";
import PostMap from '../maps/post_map'
import { createRestaurant } from "../../actions/restaurant_actions"
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";


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
`;

const MapWrapper = styled.div`
    height: 100%;
    width: 70vw;
`;

const FixedBanner = styled(Banner)`
  position: absolute;
  height: 10vh;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;


const FormWrapper = styled.div`
    height: 100%;
    width: 30vw;
    outline: 1px solid orange;
    form {
        display: flex;
        height: 90%;
        flex-direction: column;
        align-items: center;
        padding-top: 5%;
        input[type=submit] {
            width: 80%;
            height: 10%;
            background-color: hsla(30, 100%, 70%, 50%);
            &:hover {
                background-color: hsla(30, 100%, 70%, 80%);
                cursor: pointer;
            }
            &:active {
                background-color: hsla(30, 100%, 70%, 100%);
            }
        }
        .form-inputs {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
                height: 40%;
                justify-content: space-around;
                input, textarea {
                    padding: 0.2rem;
                    resize: none;
                    font-family: inherit;
                    width: 90%;
                    border: 1px dashed hsla(30, 100%, 70%, 90%);
                    &:focus {
                        outline: none;
                    }
                }
                input {
                    height: 2rem;
                }
                textarea {
                    height: 10rem;
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
            location: null
        }
        this.changeLoc = this.changeLoc.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const {name, description, location} = this.state
        if (name === '' || description === '' || (!location)) {
            return
        } else {
            // Should post and then redirect somewhere
            this.props.createRestaurant(this.state)
            this.props.history.push('/restaurants')
        }
    }

    changeLoc(val) {
        this.setState({location: val})
    }

    updateField(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    render() {
        return (
            <Container>
                <FixedBanner />
                <Wrapper>
                    <MapWrapper>
                        <PostMap style={{height: '90vh', width: '70%'}} action={this.changeLoc}/>
                    </MapWrapper>
                    <FormWrapper>
                        <form>
                            <p>Double click on the map to add a marker, drag marker to adjust</p>
                            <div className="form-inputs">
                            <input type="text" placeholder="Restaurant Name" value={this.state.name} onChange={this.updateField('name')}/>
                            <textarea placeholder="Description" onChange={this.updateField('description')} value={this.state.description}></textarea>
                            </div>
                            <input type="submit" onClick={this.handleSubmit}/>
                        </form>
                    </FormWrapper>
                </Wrapper>

            </Container>
        )
    }
}

export default withRouter(connect(null, {createRestaurant})(RestaurantCompose))