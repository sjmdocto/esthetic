import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './WelcomeText.style';

/**
 * @function WelcomeText
 * @param {*} props
 * @param {boolean} props.visible
 */
const WelcomeText = (props) => {
  if (!props.visible) {
    return null;
  }
  let line1 = 'Welcome to Esthetic, your new virtual closet.\n';
  let line2 =
    'To get started, just click on the plus in the top right to add your clothes!';
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {line1}
        {line2}
      </Text>
    </View>
  );
};

export default WelcomeText;
