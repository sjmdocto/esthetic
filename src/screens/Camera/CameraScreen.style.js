import {StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.EST_LIGHT_GREY,
  },
  preview: {
    flex: 12,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
