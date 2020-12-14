import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {styles} from './CameraFooter.style';
import theme from '../../styles/theme.style';

/**
 * @function CameraFooter
 * @param {*} props
 * @param {function} props.closeCamera
 * @param {function} props.takePicture
 */
const CameraFooter = (props) => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.backButton}>
        <Icon
          name="arrow-left"
          size={25}
          color={theme.EST_ORANGE}
          onPress={props.closeCamera}
          accessible={true}
          accessibilityLabel={'Back button'}
        />
      </View>
      <View style={styles.shutterButton}>
        <Icon
          name="aperture"
          size={35}
          color={'white'}
          onPress={props.takePicture}
          accessible={true}
          accessibilityLabel={'Shutter button'}
        />
      </View>
    </View>
  );
};

export default CameraFooter;
