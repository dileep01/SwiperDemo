import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import styles from '../styles/AppStyles';
import colors from '../utils/colors';
const AppLoader = () => {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator color={colors.loader} size={'large'} />
      <Text style={styles.loaderText}>Loading...</Text>
    </View>
  );
};

export default AppLoader;
