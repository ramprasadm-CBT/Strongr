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
  GAME_LIST_REQUEST,
  GAME_LIST_SUCCESS,
  GAME_LIST_FAIL,
  AREA_LIST_REQUEST,
  AREA_LIST_SUCCESS,
  AREA_LIST_FAIL,
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

export const filterclubReducer = (state = { clubLocationDetails: [] }, action) => {
  switch (action.type) {

    case FILTER_CLUB_REQUEST:
      return { ...state, loading: true, clubLocationDetails: [] };

    case FILTER_CLUB_SUCCESS:
      return { ...state, loading: false, clubLocationDetails: action.payload };

    case FILTER_CLUB_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export const clubListReducer = (state = { clubs: [] }, action) => {
  switch (action.type) {

    case CLUB_LIST_REQUEST:
      return { ...state, loading: true };

    case CLUB_LIST_SUCCESS:
      return { ...state, loading: false, clubs: action.payload };

    case CLUB_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export const clubDetailsReducer = (
  state = { clubdetails: [] },
  action
) => {
  switch (action.type) {
    case CLUB_DETAIL_REQUEST:
      return { loading: true, state };

    case CLUB_DETAIL_SUCCESS:
      return { loading: false, clubdetails: action.payload };

    case CLUB_DETAIL_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const clubLocationReducer = (
  state = { clubLocation: [] },
  action
) => {
  switch (action.type) {
    case CLUB_LOCATION_REQUEST:
      return { loading: true, state };

    case CLUB_LOCATION_SUCCESS:
      return { loading: false, clubLocation: action.payload };

    case CLUB_LOCATION_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const clubGameReducer = (
  state = { clubGame: [] },
  action
) => {
  switch (action.type) {
    case CLUB_GAME_REQUEST:
      return { loading: true, state };

    case CLUB_GAME_SUCCESS:
      return { loading: false, clubGame: action.payload };

    case CLUB_GAME_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const clubAmenityReducer = (
  state = { clubAmenity: [] },
  action
) => {
  switch (action.type) {
    case CLUB_AMENITIES_REQUEST:
      return { loading: true, state };

    case CLUB_AMENITIES_SUCCESS:
      return { loading: false, clubAmenity: action.payload };

    case CLUB_AMENITIES_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const clubWorkingReducer = (
  state = { clubWorking: [] },
  action
) => {
  switch (action.type) {
    case CLUB_WORKING_REQUEST:
      return { loading: true, state };

    case CLUB_WORKING_SUCCESS:
      return { loading: false, clubWorking: action.payload };

    case CLUB_WORKING_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const clubImageReducer = (
  state = { clubImage: [] },
  action
) => {
  switch (action.type) {
    case CLUB_IMAGE_REQUEST:
      return { loading: true, state };

    case CLUB_IMAGE_SUCCESS:
      return { loading: false, clubImage: action.payload };

    case CLUB_IMAGE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const areaListReducer = (state = { areas: [] }, action) => {
  switch (action.type) {

    case AREA_LIST_REQUEST:
      return { ...state, loading: true };

    case AREA_LIST_SUCCESS:
      return { ...state, loading: false, areas: action.payload };

    case AREA_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export const gameListReducer = (state = { games: [] }, action) => {
  switch (action.type) {

    case GAME_LIST_REQUEST:
      return { ...state, loading: true };

    case GAME_LIST_SUCCESS:
      return { ...state, loading: false, games: action.payload };

    case GAME_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_LOGIN_REQUEST:
        return { loading: true };

      case USER_LOGIN_SUCCESS:
        return { loading: false, userInfo: action.payload };

      case USER_LOGIN_FAIL:
        return { loading: false, error: action.payload };

      case USER_LOGOUT:
        return { };

      default:
        return state;
    }
  };

  export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_REGISTER_REQUEST:
        return { loading: true };
  
      case USER_REGISTER_SUCCESS:
        return { loading: false, userInfo: action.payload };
  
      case USER_REGISTER_FAIL:
        return { loading: false, error: action.payload };
  
      case USER_LOGOUT:
        return {};
  
      default:
        return state;
    }
  };
