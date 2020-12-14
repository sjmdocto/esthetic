import {StyleSheet} from 'react-native';
import common from '../../styles/common.style';
import theme from '../../styles/theme.style';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: common.SCREENHEIGHT / 4,
    backgroundColor: '#1F1F1F',
    borderRadius: 40,
  },
  titleContainer: {
    flex: 1,
    paddingTop: 10,
  },
  body: {
    flex: 3,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  imageContainer: {
    flex: 45,
    marginRight: 10,
    justifyContent: 'center',
  },
  buttonsContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 1,
  },
  titleText: {
    color: 'white',
    fontSize: 28,
  },
  tagsContainer: {
    flex: 55,
    justifyContent: 'space-evenly',
  },
  tagsText: {
    color: 'white',
    fontSize: 14,
  },
  discardButton: {
    flex: 1,
    marginHorizontal: 20,
    height: 50,
    width: 1,
    backgroundColor: '#141414',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButton: {
    flex: 1,
    marginHorizontal: 20,
    height: 50,
    width: 1,
    backgroundColor: theme.EST_ORANGE,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  tagSelector: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 9,
  },
  photo: {
    width: 140,
    height: 140,
    marginRight: 10,
  },
});
