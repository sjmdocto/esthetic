import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {styles} from './CameraHeader.style';

const CameraHeader = () => {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <Text style={styles.title}>Add New Clothes</Text>
    </SafeAreaView>
  );
};

export default CameraHeader;
