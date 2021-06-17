export const RECEIVE_MAP_CENTER = "RECEIVE_MAP_CENTER";
export const RECEIVE_SELECTED_RESTAURANT = "RECEIVE_SELECTED_RESTAURANT";

export const receiveMapCenter = (center) => ({
  type: RECEIVE_MAP_CENTER,
  center,
});

export const receiveSelectedRestaurant = (restaurantId) => ({
  type: RECEIVE_SELECTED_RESTAURANT,
  restaurantId,
});
