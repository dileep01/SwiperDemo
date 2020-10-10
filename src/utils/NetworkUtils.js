import NetInfo from '@react-native-community/netinfo';
export default class NetworkUtils {
  static async isNetworkAvailable() {
    const response = await NetInfo.fetch();
    return response.isConnected;
  }
}
// export default isConnected = async () => {
//   const isConnected = await NetworkUtils.isNetworkAvailable();
//   console.log('isConnected', isConnected);
//   return isConnected;
// };
