import { Platform } from 'react-native';
import {check, PERMISSIONS, request, requestMultiple, RESULTS} from 'react-native-permissions';

export const getStoragePermission = () => {

  const platform = Platform.OS == "ios" ? 'IOS' : 'ANDROID'
  requestMultiple([PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE, PERMISSIONS[platform].CAMERA]).then((statuses) => {
    console.log('WRITE_EXTERNAL_STORAGE', statuses[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE]);
    console.log('CAMERA', statuses[PERMISSIONS[platform].CAMERA]);
  });

}