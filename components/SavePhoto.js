import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';
import ColorTagMenu from './ColorTagMenu';
import TypeTagMenu from './TypeTagMenu';

const SCREENWIDTH = Dimensions.get('window').width;
const SCREENHEIGHT = Dimensions.get('window').height;

const EST_ORANGE = 'rgb(227, 131, 4)';

// To-do: blur TakePhoto screen when this screen pops up

/**
 *  Popup menu for when you press the shutter, that is
 *  called by TakePhoto.js
 *  @param {*} props
 *  @param {boolean} props.saveVisibility - used by main Modal component
 *  @param {func} props.onSave - save button handler that
 *  @param {func} props.onDiscard - discard button handler that
 *  @param {string} props.photo: base64 representation of photo just taken
 */

const SavePhoto = (props) => {
  // state variable used by ColorTagMenu
  const [colorTag, setColorTag] = useState(1);
  // state variable used by TypeTagMenu
  const [typeTag, setTypeTag] = useState(1);

  return (
    <Modal visible={props.saveVisibility} transparent={true}>
      <MenuProvider skipInstanceCheck={true}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Select Tags</Text>
          </View>
          <View style={styles.body}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.photo}
                source={{uri: `data:image/png;base64,${props.photo}`}}
              />
            </View>
            <View style={styles.tagsContainer}>
              <Text style={styles.tagsText}>Color:</Text>
              <ColorTagMenu setColorTag={setColorTag} />
              <Text style={styles.tagsText}>Type:</Text>
              <TypeTagMenu setTypeTag={setTypeTag} />
            </View>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              onPress={props.onDiscard}
              style={styles.discardButton}>
              <View>
                <Text style={styles.buttonText}>Discard</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={props.onSave.bind(this, props.photo, colorTag, typeTag)}
              style={styles.saveButton}>
              <View>
                <Text style={styles.buttonText}>Save</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </MenuProvider>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: SCREENHEIGHT / 4,
    backgroundColor: '#1F1F1F',
    borderRadius: 40,
    //bottom: SCREENHEIGHT / 5,
    // borderWidth: 1,
    // borderColor: 'purple',
  },
  titleContainer: {
    flex: 1,
    paddingTop: 10,
    // borderWidth: 1,
    // borderColor: 'blue',
  },
  body: {
    flex: 3,
    flexDirection: 'row',
    paddingHorizontal: 10,
    // borderWidth: 1,
    // borderColor: 'yellow',
  },
  imageContainer: {
    flex: 45,
    marginRight: 10,
    justifyContent: 'center',
    //backgroundColor: 'white',
  },
  buttonsContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 1,
    // borderWidth: 1,
    // borderColor: 'green',
  },
  titleText: {
    color: 'white',
    fontSize: 28,
  },
  tagsContainer: {
    flex: 55,
    justifyContent: 'space-evenly',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  tagsText: {
    color: 'white',
    fontSize: 14,
  },
  discardButton: {
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
  saveButton: {
    flex: 1,
    marginHorizontal: 20,
    // marginVertical: 5,
    height: 50,
    width: 1,
    backgroundColor: EST_ORANGE,
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
    // justifyContent: 'space-around',
  },
});

export default SavePhoto;
