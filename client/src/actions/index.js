import axios from 'axios';

export const GET_WEATHER_CLIMATE = 'GET_WEATHER_CLIMATE';
export const GET_WEATHER_WEEK_CLIMATE = 'GET_WEATHER_WEEK_CLIMATE';
export const ELIMINATE_CITY = 'ELIMINATE_CITY';
export const DRAG_AND_DROP_CITIES = 'DRAG_AND_DROP_CITIES';
export const SAVED_CITIES_LOCAL_STORAGE = 'SAVED_CITIES_LOCAL_STORAGE';

// GET CITY WEATHER CLIMATE:
export const getClimate = (city_name) => {
  return async function (dispatch) {
    try {
      const weather = await axios.get(`/weather?city_name=${city_name}`);
      return dispatch({
        type: GET_WEATHER_CLIMATE,
        payload: weather.data,
      });
    } catch (error) {
      alert('City not found');
    }
  };
};

// ELIMINATE CITY WEATHER:
export const eliminateCity = (city_id) => {
  return async function (dispatch) {
    return dispatch({
      type: ELIMINATE_CITY,
      payload: city_id,
    });
  };
};

// DRAG AND DROP CITIES:
export const dragAndDropCities = (cities) => {
  return async function (dispatch) {
    return dispatch({
      type: DRAG_AND_DROP_CITIES,
      payload: cities,
    });
  };
};

//SAVED CITIES LOCAL STORAGE:
export const savedCitiesLocalStorage = (cities) => {
  return async function (dispatch) {
    return dispatch({
      type: SAVED_CITIES_LOCAL_STORAGE,
      payload: cities,
    });
  };
};

// GET CITY WEEK WEATHER CLIMATE:
export const getWeekClimate = (lon, lat) => {
  return async function (dispatch) {
    try {
      return dispatch({
        type: GET_WEATHER_WEEK_CLIMATE,
        payload: week_weather.data,
      });
    } catch (error) {
      alert('Apologies. We encountered an error. Please try again.');
    }
  };
};
