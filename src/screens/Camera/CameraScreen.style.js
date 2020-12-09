import {StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.EST_LIGHT_GREY,
    // borderWidth: 1,
    // borderColor: 'orange',
  },
  preview: {
    flex: 12,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'red',
  },
});
