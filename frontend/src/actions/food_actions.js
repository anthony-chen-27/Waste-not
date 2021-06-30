export const RECEIVE_FOOD_CATEGORY = "RECEIVE_FOOD_CATEGORY";
export const CLEAR_FOOD_CATEGORY = "CLEAR_FOOD_CATEGORY";

export const receiveFoodCategory = (category) => ({
  type: RECEIVE_FOOD_CATEGORY,
  category,
});

export const clearFoodCategory = () => ({
  type: CLEAR_FOOD_CATEGORY,
});
