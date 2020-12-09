import common from '../../styles/common.style';
import {StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.EST_GREY, // TODO: add this to theme
  },
  item: {
    margin: 1,
    flex: 1 / 3,
    height: common.SCREENWIDTH / 3,
    width: common.SCREENWIDTH / 3,
    // backgroundColor: 'black',
  },
  photo: {
    height: common.SCREENWIDTH / 3,
    width: common.SCREENWIDTH / 3,
  },
  nonDetailView: {
    flex: 3,
    // backgroundColor: 'red',
  },
  detailView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    // marginVertical: SCREENHEIGHT / 4,
    backgroundColor: theme.EST_LIGHT_BLACK,
    borderRadius: 30,
    //bottom: SCREENHEIGHT / 5,
    // borderWidth: 1,
    // borderColor: 'purple',
  },
  undoButton: {
    flex: 1,
    marginHorizontal: 20,
    // marginVertical: 5,
    height: 50,
    width: 1,
    backgroundColor: theme.EST_BLACK,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButton: {
    flex: 1,
    marginHorizontal: 20,
    // marginVertical: 5,
    height: 50,
    width: 1,
    backgroundColor: 'darkred',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
