import {SUCCESS, REQUEST, ERROR} from '../utils/constants';
export const GET_APPDATA_REQUEST = 'GET_APPDATA_REQUEST';
export const GET_APPDATA_SUCCESS = 'GET_APPDATA_SUCCESS';
export const GET_APPDATA_FAILURE = 'GET_APPDATA_FAILURE';
import {shuffleArray} from '../utils/utilities';
export function getAppDataRequest() {
  return {
    type: GET_APPDATA_REQUEST,
    status: REQUEST,
  };
}
export function getAppDataSuccess(data) {
  return {
    type: GET_APPDATA_SUCCESS,
    status: SUCCESS,
    data,
  };
}
export function getAppDataFailure(error) {
  return {
    type: GET_APPDATA_FAILURE,
    status: ERROR,
    error,
  };
}

export function getAppData() {
  return async (dispatch, getState, api) => {
    dispatch(getAppDataRequest());
    try {
      const result = await api.get();
      const resultJson = await result.json();
      dispatch(getAppDataSuccess(shuffleArray(resultJson)));
    } catch (e) {
      dispatch(getAppDataFailure(e.message));
    }
  };
}
