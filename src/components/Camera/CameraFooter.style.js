import {StyleSheet} from 'react-native';
import common from '../../styles/common.style';
import theme from '../../styles/theme.style';

export const styles = StyleSheet.create({
  footerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.EST_LIGHT_BLACK,
  },
  backButton: {
    position: 'absolute',
    left: common.SCREENWIDTH / 6,
  },
  shutterButton: {
    // centers shutterButton regardless of backButton position
    position: 'absolute',
  },
});
