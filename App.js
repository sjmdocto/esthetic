import React, {useState, useEffect} from 'react';
import ClosetScreen from './src/screens/Closet/ClosetScreen';
import CameraScreen from './src/screens/Camera/CameraScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import getSavedCloset from './src/util/getSavedCloset';
import ClosetContext from './src/util/ClosetContext';
import LoadingScreen from './src/screens/Loading/LoadingScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createStackNavigator();

const App = () => {
  const [closet, setCloset] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        let savedCloset = await getSavedCloset();
        setCloset(savedCloset);
        setIsLoading(false);
      } catch (e) {}
    })();
  }, []);

  if (isLoading === true) {
    return <LoadingScreen />;
  }

  const value = {closet, setCloset};

  return (
    <ClosetContext.Provider value={value}>
      <SafeAreaProvider>
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
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ClosetContext.Provider>
  );
};

export default App;
