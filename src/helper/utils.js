import AsyncStorage from "@react-native-async-storage/async-storage";

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