const initialState = {
  fullList: [],
  restaurantInfo: null,
  error: null,
  cuisineRestaurants: [],
  cuisineRestaurantError: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FETCH_RESTAURANT_SUCCESS':
    case 'FETCH_RESTAURANT_TYPE_SUCCESS':
      return {
        ...state,
        fullList: payload,
        restaurantInfo: null,
        error: null,
      };
    case 'FETCH_CUISINE_RESTAURANT_SUCCESS':
      return {
        ...state,
        cuisineRestaurants: payload,
        error: null,
        cuisineRestaurantError: null,
      };
    case 'FETCH_RESTAURANT_INFO_SUCCESS':
      return {
        ...state,
        error: null,
        restaurantInfo: payload,
      };
    case 'FETCH_CUISINE_RESTAURANT_ERROR':
      return {
        ...state,
        cuisineRestaurantError: payload,
      };
    case 'FETCH_RESTAURANT_ERROR':
    case 'FETCH_RESTAURANT_TYPE_ERROR':
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
