import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker  from 'react-native-image-picker'
import messages from  "@react-native-firebase/messaging"

export const saveDataInAsyncStorage = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
        console.error(e)
    }
  };

export const getDataFromAsyncStorage = async (key) => {
    try {
        var value = await AsyncStorage.getItem(key);
        return value
    } catch (error) {
        
    }
}

export const launchimageLibrary = () => {
  return new Promise((resolve, reject) => {
    ImagePicker.launchImageLibrary({
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 0,
      mediaType: 'photo',
      includeBase64: false,
    }, (response) => { 
      if (response.didCancel) {
          resolve({status: false, message: 'User cancelled image picker'})
      } else if (response.error) {
          resolve({status: false, message: response.error})
      } else if (response.customButton) {
          resolve({status: false, message: 'Something went wrong'})
      } else {
          resolve({status: true, message: 'Picture Selected', data: response.assets[0]})
      }
  });
  })
}

export const getDeviceToken = async () => {
   try {
      const fcmToken = await messages().getToken()
      return fcmToken
   } catch (error) {
      throw error
   }
}