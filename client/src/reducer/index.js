// Import action types variables:
import {
  GET_WEATHER_CLIMATE,
  GET_WEATHER_WEEK_CLIMATE,
  ELIMINATE_CITY,
  DRAG_AND_DROP_CITIES,
  SAVED_CITIES_LOCAL_STORAGE,
} from '../actions/index.js';

// Set initial global state:
const initialState = {
  cities_weather: [],
  week_weather: [],
};

// Create reducer functions:
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER_CLIMATE:
      return {
        ...state,
        cities_weather: state.cities_weather.some(
          (city) => city.id === action.payload.id
        )
          ? state.cities_weather
          : [...state.cities_weather, action.payload],
      };
    case GET_WEATHER_WEEK_CLIMATE:
      return {
        ...state,
        week_weather: action.payload,
      };
    case ELIMINATE_CITY:
      return {
        ...state,
        cities_weather: state.cities_weather.filter(
          (city) => city.id !== action.payload
        ),
      };
    case DRAG_AND_DROP_CITIES:
      return {
        ...state,
        cities_weather: action.payload,
      };
    case SAVED_CITIES_LOCAL_STORAGE:
      return {
        ...state,
        cities_weather: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
