import {StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';

export const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.EST_LIGHT_GREY,
  },
  title: {
    fontSize: 17,
  },
});
