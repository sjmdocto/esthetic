import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import {ICON_SIZE, styles} from './LoadingScreen.style';
import theme from '../../styles/theme.style';

/**
 * @function LoadingScreen
 * @param {} navigation
 */
const LoadingScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={styles.container}
      accessible={true}
      accessibilityLabel={'Loading Screen'}>
      <Icon name="loader" size={ICON_SIZE} color={theme.EST_ORANGE} />
    </SafeAreaView>
  );
};

export default LoadingScreen;
