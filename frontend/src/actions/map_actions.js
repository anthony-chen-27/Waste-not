export const RECEIVE_MAP_ORIGIN = "RECEIVE_MAP_ORIGIN";
export const RECEIVE_SELECTED_RESTAURANT = "RECEIVE_SELECTED_RESTAURANT";

export const receiveMapOrigin = (mapOrigin) => ({
  type: RECEIVE_MAP_ORIGIN,
  mapOrigin,
});

export const receiveSelectedRestaurant = (restaurantId) => ({
  type: RECEIVE_SELECTED_RESTAURANT,
  restaurantId,
});
