import {
  CLUB_LIST_REQUEST,
  CLUB_LIST_SUCCESS,
  CLUB_LIST_FAIL,
  CLUB_DETAIL_REQUEST,
  CLUB_DETAIL_SUCCESS,
  CLUB_DETAIL_FAIL,
  CLUB_LOCATION_REQUEST,
  CLUB_LOCATION_SUCCESS,
  CLUB_LOCATION_FAIL,
  CLUB_AMENITIES_REQUEST,
  CLUB_AMENITIES_SUCCESS,
  CLUB_AMENITIES_FAIL,
  CLUB_WORKING_REQUEST,
  CLUB_WORKING_SUCCESS,
  CLUB_WORKING_FAIL,
  CLUB_GAME_REQUEST,
  CLUB_GAME_SUCCESS,
  CLUB_GAME_FAIL,
  CLUB_IMAGE_REQUEST,
  CLUB_IMAGE_SUCCESS,
  CLUB_IMAGE_FAIL,
  AREA_LIST_REQUEST,
  AREA_LIST_SUCCESS,
  AREA_LIST_FAIL,
  GAME_LIST_REQUEST,
  GAME_LIST_SUCCESS,
  GAME_LIST_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  FILTER_CLUB_REQUEST,
  FILTER_CLUB_SUCCESS,
  FILTER_CLUB_FAIL,
} from "../constants/constants";
import axios from "axios";

export const filterLocation = (areaName, gameName, date) => async (dispatch) => {
  try {
    dispatch({ type: FILTER_CLUB_REQUEST });

    const { data } = await axios.get("/api/filterclubs/", {
      params: {
        area: areaName,
        game: gameName,
        date: date,
      },
    });

    dispatch({
      type: FILTER_CLUB_SUCCESS,
      payload: data,
    });

  } catch (error) {
    dispatch({
      type: FILTER_CLUB_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const listClubs = () => async (dispatch) => {
  try {
    dispatch({ type: CLUB_LIST_REQUEST });

    const { data } = await axios.get("/api/clubs/");

    dispatch({
      type: CLUB_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CLUB_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const listclubDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: CLUB_DETAIL_REQUEST });

    const { data } = await axios.get(`/api/${id}`);

    dispatch({
      type: CLUB_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CLUB_DETAIL_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const listclubLocation = (id) => async (dispatch) => {
  try {
    dispatch({ type: CLUB_LOCATION_REQUEST });

    const { data } = await axios.get(`/api/clublocation/${id}`);

    dispatch({
      type: CLUB_LOCATION_SUCCESS,
      payload: data,
    });
  } catch (error) {

    dispatch({
      type: CLUB_LOCATION_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const listclubGame = (id) => async (dispatch) => {
  try {
    dispatch({ type: CLUB_GAME_REQUEST });

    const { data } = await axios.get(`/api/clubgame/${id}`);

    dispatch({
      type: CLUB_GAME_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CLUB_GAME_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const listclubAmenities = (id) => async (dispatch) => {
  try {
    dispatch({ type: CLUB_AMENITIES_REQUEST });

    const { data } = await axios.get(`/api/clubamenities/${id}`);

    dispatch({
      type: CLUB_AMENITIES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CLUB_AMENITIES_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const listclubWorking = (id) => async (dispatch) => {
  try {
    dispatch({ type: CLUB_WORKING_REQUEST });

    const { data } = await axios.get(`/api/clubworking/${id}`);

    dispatch({
      type: CLUB_WORKING_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CLUB_WORKING_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const listClubImages = (id) => async (dispatch) => {
  try {
    dispatch({ type: CLUB_IMAGE_REQUEST });

    const { data } = await axios.get(`/api/clubimages/${id}`);

    dispatch({
      type: CLUB_IMAGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CLUB_IMAGE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const listAreas = () => async (dispatch) => {
  try {
    dispatch({ type: AREA_LIST_REQUEST });

    const { data } = await axios.get("/api/areas/");

    dispatch({
      type: AREA_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AREA_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const listGames = () => async (dispatch) => {
  try {
    dispatch({ type: GAME_LIST_REQUEST });

    const { data } = await axios.get("/api/games/");

    dispatch({
      type: GAME_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GAME_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/login/",
      { username: username, password: password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));

  } catch (error) {
    alert("error");
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/register/",
      { name: name, email: email, password: password },
      config
    );

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
