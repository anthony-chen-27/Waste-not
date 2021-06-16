import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import ShowMap from '../maps/show_map'
import { fetchRestaurants } from "../../actions/restaurant_actions";
import Display from '../results/display'

const Wrapper = styled.div`
    display: flex;
    height: 90vh;
    width: 100vw;
    outline: 1px solid blue;
`;

const MapWrapper = styled.div`
    height: 100%;
    width: 70vw;
    outline: 1px solid green;
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
        padding-bottom: 15%;
        justify-content: space-between;
        input[type=submit] {
            width: 80%;
            height: 10%;
            background-color: hsla(30, 100%, 70%, 50%);
            &:hover {
                background-color: hsla(30, 100%, 70%, 80%);
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
            title: '',
            description: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    updateField(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    render() {
        return (
            <Wrapper>
                <MapWrapper>
                    Map
                </MapWrapper>
                <FormWrapper>
                    <form>
                        <div className="form-inputs">
                        <input type="text" placeholder="Restaurant Name" value={this.state.title} onChange={this.updateField('title')}/>
                        <textarea placeholder="Description" onChange={this.updateField('description')}>{this.state.description}</textarea>
                        </div>
                        <input type="submit" onClick={this.handleSubmit}/>
                    </form>
                </FormWrapper>
            </Wrapper>
        )
    }
}

export default RestaurantCompose