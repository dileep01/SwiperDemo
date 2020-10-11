import {connect} from 'react-redux';
import SwiperList from '../screens/SwiperList';
import {getAppData} from '../actions/appdata.action';

const mapStateToProps = state => {
  return {
    loading: state.appData.loading,
    error: state.appData.error,
    status: state.appData.status,
    data: state.appData.data,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAppData: () => {
      dispatch(getAppData());
    },
  };
};

const SwiperContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SwiperList);
export default SwiperContainer;
