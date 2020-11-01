import React, {useState, useContext} from 'react';
import {View, Text, Modal, TouchableOpacity, Image} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';
import ColorTagMenu from './ColorTagMenu';
import TypeTagMenu from './TypeTagMenu';
import {styles} from './SavePhotoMenu.style';
import ClosetContext from '../../util/ClosetContext';

// To-do: blur TakePhoto screen when this screen pops up

/**
 *  Popup menu for when you press the shutter, that is
 *  called by TakePhoto.js
 *  @param {*} props
 *  @param {boolean} props.saveVisibility
 *  @param {func} props.onSave
 *  @param {func} props.onDiscard
 *  @param {string} props.photo: base64 representation of photo just taken
 *  @param {array} props.closet
 */

const SavePhotoMenu = (props) => {
  // state variable used by ColorTagMenu
  const [colorTag, setColorTag] = useState(1);
  // state variable used by TypeTagMenu
  const [typeTag, setTypeTag] = useState(1);

  return (
    <Modal visible={props.saveVisibility} transparent={true}>
      <MenuProvider skipInstanceCheck={true}>
        <View
          style={styles.container}
          accessible={true}
          accessibilityLabel={'Save Photo Menu'}>
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
              style={styles.discardButton}
              accessible={true}
              accessibilityLabel={'Discard button'}>
              <View>
                <Text style={styles.buttonText}>Discard</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={props.onSave.bind(this, colorTag, typeTag)}
              style={styles.saveButton}
              accessible={true}
              accessibilityLabel={'Save button'}>
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

export default SavePhotoMenu;
