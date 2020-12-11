import {StyleSheet} from 'react-native';
import common from '../../styles/common.style';
import theme from '../../styles/theme.style';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0,
    paddingHorizontal: common.SCREENWIDTH / 10,
    backgroundColor: theme.EST_GREY,
    height: common.SCREENHEIGHT / 2,
  },
  text: {
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    // backgroundColor: 'red',
  },
});
