import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {styles} from './Camera.style';

const CameraHeader = () => {
  return (
    <SafeAreaView style={styles.topContainer}>
      <Text style={styles.title}>Add New Clothes</Text>
    </SafeAreaView>
  );
};

export default CameraHeader;
