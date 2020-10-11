import React, {Component} from 'react';
import configureStore from './configStore';
import {Provider} from 'react-redux';
import SwiperContainer from './src/containers/SwiperContainer';
import ErrorScreen from './src/corecomponents/ErrorScreen';
import {NO_INTERNET} from './src/utils/constants';
import NetworkUtils from './src/utils/NetworkUtils';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: configureStore(),
      isConnected: false,
    };
  }
  async componentDidMount() {
    const isConnected = await NetworkUtils.isNetworkAvailable();
    this.setState({isConnected});
  }

  render() {
    return (
      <Provider store={this.state.store}>
        {this.state.isConnected ? (
          <SwiperContainer />
        ) : (
          <ErrorScreen errorText={NO_INTERNET} />
        )}
      </Provider>
    );
  }
}
