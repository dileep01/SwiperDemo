import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/AppStyles';
const ErrorScreen = ({errorText}) => {
  return (
    <View style={styles.loaderContainer}>
      <Text>{errorText}</Text>
    </View>
  );
};

export default ErrorScreen;
