import {StyleSheet} from 'react-native';
import colors from '../utils/colors';
import {Platform} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.swiperBackground,
  },
  author: {
    color: colors.white,
    fontSize: 20,
    padding: 10,
  },
  swiperImage: {
    width: '100%',
    height: '100%',
  },
  authorBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingTop: Platform.OS === 'ios' ? 35 : 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
