import {StyleSheet, Platform, StatusBar} from 'react-native';
import theme from '../../styles/theme.style';

export const styles = StyleSheet.create({
  menuScreen: {
    flexDirection: 'row',
    flex: 1,
    // if android, can use StatusBar.currentHeight
    // else, for iOS, has to be set manually to 20
    // PROBLEM: dealing with android's with notches
    // and iPhone's w/o notches
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  menuArea: {
    backgroundColor: theme.EST_ORANGE_TRANSP,
    flex: 9,
    color: 'white',
    // only looks good on iPhones w/notches
    paddingTop: Platform.OS === 'android' ? 0 : 45,
    paddingBottom: Platform.OS === 'android' ? 0 : 10,
  },
  menuHeader: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    //height: '8%',
    flex: 8,
  },
  filtersTitle: {
    color: 'white',
    paddingTop: '3%',
    paddingLeft: '5%',
    fontWeight: 'bold',
    fontSize: 30,
  },
  menuBody: {
    paddingTop: '5%',
    paddingLeft: '5%',
    flex: 100,
  },
  colorsContainer: {
    flexGrow: 1,
  },
  categoriesHeader: {
    flexDirection: 'row',
  },
  clothingContainer: {
    flexGrow: 1,
  },
  optionsContainer: {
    flexGrow: 1,
    justifyContent: 'space-evenly',
    paddingLeft: '20%',
  },
  categoriesText: {
    paddingLeft: 5,
    color: 'white',
    fontSize: 16,
  },
  doneContainer: {
    paddingBottom: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  doneButton: {
    //borderWidth: 1,
    width: 50,
    alignItems: 'center',
  },
  doneText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  nonMenuArea: {
    flex: 4,
  },
});
