import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Modal,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/Feather';
import SavePhoto from './SavePhoto';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

const SCREENWIDTH = Dimensions.get('window').width;

const EST_ORANGE = 'rgb(227, 131, 4)';

/**
 * Modal screen for taking photos, that is called by Header.js
 * @param {*} props
 * @param {boolean} props.visible - sets visibility of TakePhoto screen
 * @param {func} props.onOpen - open the camera
 * @param {func} props.onClose - close the camera
 */

const TakePhoto = (props) => {
  // state variables for taking a photo
  const [photoBase64, setPhotoBase64] = useState('');

  // used by takePicture()
  let cameraRef = useRef(null);

  /**
   * Handler for taking a photo.
   * Takes the photo, gets the photo's URI and base64 representation,
   * and updates their corresponding state variables
   */
  const takePicture = async () => {
    if (cameraRef) {
      const options = {quality: 0.5, base64: true};
      const data = await cameraRef.current.takePictureAsync(options);
      setPhotoBase64(data.base64);
    }
  };

  // state variable for SavePhoto menu modal
  const [saveVisible, setSaveVisible] = useState(false);

  /**
   * Handler for pressing the shutter button.
   */
  const shutterHandler = () => {
    takePicture();
    setSaveVisible(true);
  };

  /**
   * Handler for discarding the photo that was just taken.
   */
  const discardHandler = () => {
    // (IMPLEMENT WHEN CAMERA SCREEN BLURRING HAS BEEN IMPLEMENTED)
    // TO-DO: "refresh" camera screen,

    // then hide save menu
    setSaveVisible(false);
  };

  /**
   * Handler for saving the photo that was just taken.
   * Saves the photo and clothing info into a clothingItem object,
   * and then saves that clothingItem object to AsyncStorage.
   * Finally, hide the SavePhoto menu modal
   * @param photo - photo's base64 representation
   * @param colorTag - selected colorTag for the clothing item
   * @param typeTag - selected typeTag for the clothing item
   */
  const saveHandler = (photo, colorTag, typeTag) => {
    /** Construct a clothingItem object
     * @param photo - photo in base64 representation
     * @param colorTag - selected colorTag for the clothing item
     * @param typeTag - selected typeTag for the clothing item
     * @param key - a uuidv4 used for key in AsyncStorage and Flatlist
     */
    const key = uuidv4();

    const clothingItem = {
      photo: photo,
      colorTag: colorTag,
      typeTag: typeTag,
      key: key,
    };

    // Add new clothingItem to wardrobe
    props.addToWardrobe(clothingItem, key);

    // Hide SavePhoto menu modal
    setSaveVisible(false);
  };
  return (
    <Modal visible={props.visible}>
      <View style={styles.container}>
        <SavePhoto
          saveVisibility={saveVisible}
          onSave={saveHandler}
          onDiscard={discardHandler}
          photo={photoBase64}
        />
        <SafeAreaView style={styles.topContainer}>
          <Text style={styles.title}>Add New Clothes</Text>
        </SafeAreaView>
        <RNCamera
          ref={cameraRef}
          style={styles.preview}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          captureAudio={false}
        />
        <View style={styles.bottomContainer}>
          <View style={styles.backButton}>
            <Icon
              name="arrow-left"
              size={25}
              color={EST_ORANGE}
              onPress={props.onClose}
            />
          </View>
          <View style={styles.shutterButton}>
            <Icon
              name="aperture"
              size={35}
              color={'white'}
              onPress={shutterHandler}
            />
          </View>
        </View>
        <View style={styles.bottomBuffer} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
    left: SCREENWIDTH / 6,
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

export default TakePhoto;
