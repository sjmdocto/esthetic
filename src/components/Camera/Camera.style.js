import {StyleSheet} from 'react-native';
import common from '../../styles/common.style';

export const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
    // borderWidth: 1,
    // borderColor: 'blue',
  },
  title: {
    fontSize: 17,
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    // borderWidth: 1,
    // borderColor: 'white',
  },
  backButton: {
    position: 'absolute',
    left: common.SCREENWIDTH / 6,
  },
  shutterButton: {
    // centers shutterButton regardless of backButton position
    position: 'absolute',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
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
  bottomBuffer: {
    paddingBottom: 30,
  },
});
