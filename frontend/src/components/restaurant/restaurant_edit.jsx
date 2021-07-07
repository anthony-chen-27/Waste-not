import React from "react";
import styled from "styled-components";
import Banner from "../banner/banner";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;1,300;1,400&display=swap');
</style>;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 460px;
  min-height: 460px;
  overflow: hidden;
  padding: 1rem;
`;

const Name = styled.p`
  font-weight: 600;
  font-size: 1.4rem;
  text-transform: capitalize;
  text-shadow: 1px 1px hsla(0, 0%, 75%, 25%);
  font-family: inherit;
  padding: 1rem;
`;

const FoodItems = styled.ul`
    gap: 10px;
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

const FoodItemCard = styled.li`
  display: flex;
  border: 1px solid #eeeeef;
  border-radius: 4px;
  transition: box-shadow 0.3s;
  justify-content: space-between;
  height: 20px;
  &:hover {
    box-shadow: 0 0 10px rgb(0 0 0 / 10%);
  }
  cursor: pointer;
  padding: 10px;
  width: calc(100% - 20px);
  gap: 10px;
`;

const FoodButton = styled.button`
    cursor: pointer;
    color: hsl(0, 0%, 30%);
    margin-bottom: 1.5em;
    :hover {
      background: hsl(165, 38%, 95%);
    }

    :active {
      background: hsla(33, 85%, 70%, 80%);
    }
`;

const FoodItemForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FoodItemLabel = styled.label`

`;

const FoodItemInput = styled.input`
    height: 38px;
    border-radius: 10px;
    border: 1px dashed hsla(30, 100%, 70%, 60%);
    padding-left: 12px;
    letter-spacing: 1px;
    font-family: "Signika", sans-serif;
    font-size: 13px;
    :hover {
      background: hsla(0, 10%, 100%, 80%);
    }
    :focus {
      outline: none;
    }
`;

class RestaurantEdit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            servings: 1
        };

        this.addFoodItem = this.addFoodItem.bind(this);
    }

    componentDidMount() {
        this.props.fetchRestaurant()
        console.log(this.state)
    }

    componentDidUpdate() {
        // this.props.fetchProfile(this.props.currentUser.id)
        // console.log(this.state)
    }

    addFoodItem(e) {
        console.log(this.props.restaurant)
        e.preventDefault();
        this.props.createFoodItem(
            {
                name: this.state.name,
                description: this.state.description,
                servings: this.state.servings,
                restaurant: this.props.restaurant._id
            }
        );
    }

    deleteFoodItem(foodItemId) {
        return e => {
        e.preventDefault();
        this.props.deleteFoodItem(foodItemId)
        }
    }

    update(field) {
        console.log(this.state)
        return e => 
            this.setState({
                [field]: e.currentTarget.value,
            });
    }

    render() {
        const { foodItems, restaurant } = this.props;
        console.log('food items: ', foodItems)
        return (
            <Container>
                <Name>{restaurant.name}</Name>
                {
                    foodItems ? <FoodItems>
                        {foodItems.map(foodItem => {
                        return (
                            <FoodItemCard>
                                <p>{foodItem.name} Servings: {foodItem.servings}</p>
                                <button onClick={this.deleteFoodItem(foodItem._id)}>Remove</button>
                            </FoodItemCard>
                        )
                    })}
                    </FoodItems> : '' 
                }
                <Name>Add Food</Name>
                <FoodItemForm>
                    <FoodItemInput type="text" value={this.state.name} onChange={this.update('name')} placeholder='Food name' />
                        <FoodItemInput type="text" value={this.state.description} onChange={this.update('description')} placeholder='Description'/>
                    <FoodItemLabel>Servings:
                        <FoodItemInput type="number" value={this.state.servings} min="1" onChange={this.update('servings')} />
                    </FoodItemLabel>
                    <FoodButton onClick={this.addFoodItem}>Add Food</FoodButton>
                </FoodItemForm>
            </Container>
        )
    }
}

export default RestaurantEdit;