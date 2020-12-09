import {StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';

export const HEADER_BUTTON_SIZE = 35;

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    // main direction, (which justifyContent works on)
    // is horizontal
    justifyContent: 'center',
    // cross-direction, (which alignItems works on)
    //  is vertical
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    height: '7%',
    flex: 0,
    backgroundColor: theme.EST_LIGHT_GREY,
  },
  menuButton: {
    left: -110,
  },
  titleContainer: {
    alignContent: 'center',
  },
  titleText: {
    fontSize: 17,
  },
  addButton: {
    right: -110,
  },
});

export const optionsStyles = {
  optionsContainer: {
    padding: 1,
  },
  optionsWrapper: {},
};
