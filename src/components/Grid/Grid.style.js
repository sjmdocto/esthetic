import common from '../../styles/common.style';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    backgroundColor: '#1F1F1F',
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
    backgroundColor: '#141414',
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
