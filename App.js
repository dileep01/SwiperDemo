import React, {Component} from 'react';
import configureStore from './configStore';
import {Provider} from 'react-redux';

import SwiperContainer from './src/containers/SwiperContainer';
import SwiperList from './src/screens/SwiperList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: configureStore(),
    };
  }
  render() {
    return (
      <Provider store={this.state.store}>
        <SwiperContainer />
      </Provider>
    );
  }
}
