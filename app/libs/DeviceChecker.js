import {NativeModules} from 'react-native';
const {DeviceChecker} = NativeModules;

export const isDevice = (): boolean => DeviceChecker.checkDevice();

export default DeviceChecker;
