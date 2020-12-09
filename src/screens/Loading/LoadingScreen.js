import React from 'react';
import {SafeAreaView, Text} from 'react-native';

const LoadingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{justifyContent: 'center'}}>
      <Text>Loading!</Text>
    </SafeAreaView>
  );
};

export default LoadingScreen;
