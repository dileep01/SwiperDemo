import * as newsActions from '../actions/appdata.action';
import {shuffleArray} from '../utils/utilities';
const appData = (
  state = {
    loading: false,
    appData: null,
    status: '',
    error: '',
  },
  action,
) => {
  switch (action.type) {
    case newsActions.GET_APPDATA_REQUEST: {
      return Object.assign({}, state, {
        loading: true,
        status: action.status,
      });
    }
    case newsActions.GET_APPDATA_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        status: action.status,
        data: action.data,
      });
    }
    case newsActions.GET_APPDATA_FAILURE: {
      return Object.assign({}, state, {
        loading: false,
        status: action.status,
        error: action.error,
      });
    }
    default:
      return state;
  }
};
export default appData;
