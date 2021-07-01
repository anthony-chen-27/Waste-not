import { connect } from "react-redux";
import EditRestaurant from "./restaurant_edit";
import { fetchProfile } from '../../actions/profile_actions';
import { createFoodItem } from '../../actions/restaurant_actions'
import { fetchRestaurants, fetchRestaurant } from "../../actions/restaurant_actions"

const mSTP = (state, ownProps) => {
    console.log('restaurant: ', ownProps.restaurant.restaurant)
    return {
        foodItems: ownProps.restaurant.restaurant.foodItems
    }
}

const mDTP = (dispatch, ownProps) => {
    return {
        fetchProfile: userId => dispatch(fetchProfile(userId)),
        createFoodItem: foodItem => dispatch(createFoodItem(foodItem)),
        fetchRestaurants: () => dispatch(fetchRestaurants()),
        fetchRestaurant: () => dispatch(fetchRestaurant(ownProps.restaurant.restaurant._id))        
    }
}

export default connect(mSTP, mDTP)(EditRestaurant);