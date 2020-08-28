import React, {useState, useRef, useEffect} from 'react';
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
import AsyncStorage from '@react-native-community/async-storage';

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
  const [photoURI, setPhotoURI] = useState();
  const [photoBase64, setPhotoBase64] = useState('');

  // let photoURI;
  // let photoBase64;

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
      console.log('Set photoURI to: ' + data.uri);

      setPhotoURI(data.uri);
      setPhotoBase64(data.base64);

      // console.log('base64: ' + photoBase64);
      //console.warn('takePictureResponse ' + data.uri);
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
    // "refresh" camera screen,

    // then hide save menu
    setSaveVisible(false);
  };

  /**
   * Handler for saving the photo that was just taken.
   * Saves the URI and base64 into a clothingItem object,
   * and then saves that clothingItem object to AsyncStorage.
   * Finally, hide the SavePhoto menu modal
   * @param uri - photo's URI
   * @param base64 - photo's base64 representation
   * @param colorTag - selected colorTag for the photo
   * @param typeTag - selected typeTag for the photo
   */
  const saveHandler = (uri, base64, colorTag, typeTag) => {
    // const storeData = async (value) => {
    //   try {
    //     const jsonValue = JSON.stringify(value);
    //     await AsyncStorage.setItem(base64, jsonValue);
    //     console.log('Data was stored');
    //   } catch (e) {
    //     console.log('Saving error');
    //     console.log(e);
    //   }
    // };

    // const vs let here?
    const clothingItem = {
      photoURI: uri,
      // don't need to store since its saved as the key for AsyncStorage
      // photoBase64: {photoBase64},
      colorTag: colorTag,
      typeTag: typeTag,
      key: base64,
    };
    console.log('clothingItem.uri: ' + uri);

    // storeData(clothingItem);

    /**
     * Add new clothingItem to wardrobe
     */
    // console.log('clothingItem = ' + clothingItem);
    props.addToWardrobe(clothingItem, base64);

    setSaveVisible(false);
  };
  return (
    <Modal visible={props.visible}>
      <View style={styles.container}>
        <SavePhoto
          saveVisibility={saveVisible}
          onSave={saveHandler}
          onDiscard={discardHandler}
          photoURI={photoURI}
          photoBase64={photoBase64}
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
