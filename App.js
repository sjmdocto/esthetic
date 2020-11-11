import React, {useState} from 'react';
import ClosetScreen from './src/screens/Closet/ClosetScreen';
// import {testCloset} from './src/components/Grid/testCloset';
// import {smallTestCloset} from './src/components/Grid/smallTestCloset';
import CameraScreen from './src/screens/Camera/CameraScreen';
import ImportScreen from './src/screens/Import/ImportScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import getSavedCloset from './src/util/getSavedCloset';
import ClosetContext from './src/util/ClosetContext';
import getStorageKeys from './src/util/getStorageKeys';
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();



const App = () => {
  const clearAppData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      await AsyncStorage.multiRemove(keys);
    } catch (error) {
      console.error('Error clearing app data.');
    }
  };

  // const removeAll = async () => {
  //   const keys = getStorageKeys();
  //   console.log(Array.isArray(keys));
  //   try {
  //     await AsyncStorage.multiRemove(keys);
  //   } catch (e) {
  //     console.warn('removeAll: ' + e);
  //   }
  // };

  // Initialize context
  // --closet
  const initialCloset = getSavedCloset();
  // const initialCloset = largeTestCloset;
  const [closet, setCloset] = useState(initialCloset);
  const value = {closet, setCloset};
  // const ClosetContext = createContext([closet, setCloset]);

  return (
    <ClosetContext.Provider value={value}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Closet'}>
          <Stack.Screen
            name={'Closet'}
            component={ClosetScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'Camera'}
            component={CameraScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'Import'}
            component={ImportScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
        {/* <ClosetScreen closet={largeTestCloset} filterColor={0} filterType={0} /> */}
      </NavigationContainer>
    </ClosetContext.Provider>
  );
};

export default App;
