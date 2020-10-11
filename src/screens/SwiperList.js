import React, {useEffect} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import Swiper from 'react-native-swiper';
import FastImage from 'react-native-fast-image';
import {BASE_URL} from '../utils/apiRequest';
import NetworkUtils from '../utils/NetworkUtils';
import AppLoader from '../corecomponents/AppLoader';
import styles from '../styles/SwiperListStyles';
import ErrorScreen from '../corecomponents/ErrorScreen';
import {ERROR_TEXT} from '../utils/constants';
const SwiperList = props => {
  const {data, getAppData, error} = props;
  useEffect(() => {
    (async () => {
      const isConnected = await NetworkUtils.isNetworkAvailable();
      isConnected && getAppData();
    })();
  }, []);

  let lapsList = null;
  if (data && data.length > 0) {
    lapsList = data.map(item => {
      return (
        <View style={styles.slide} key={item.filename}>
          <FastImage
            source={{
              uri: `${BASE_URL}/400/600?image=${item.id}`,
              priority: FastImage.priority.normal,
              cacheControl: FastImage.cacheControl.cacheOnly,
            }}
            style={styles.swiperImage}
          />
          <View style={styles.authorBackground}>
            <Text style={styles.author}>{item.author}</Text>
          </View>
        </View>
      );
    });
  }
  if (data && data.length > 0) {
    return (
      <View style={styles.container}>
        <Swiper showsButtons={true} showsPagination={false}>
          {lapsList}
        </Swiper>
      </View>
    );
  }
  if (error) {
    return <ErrorScreen errorText={ERROR_TEXT} />;
  }
  return <AppLoader />;
};

export default SwiperList;
