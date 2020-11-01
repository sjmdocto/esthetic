import React, {useState, useRef} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {RNCamera} from 'react-native-camera';
// import takePicture from '../../util/takePicture';
import Icon from 'react-native-vector-icons/Feather';
// import SavePhoto from './SavePhoto';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {styles} from './Camera.style';
import theme from '../../styles/theme.style';
import takePicture from '../../util/takePicture';

/**
 * @param {*} props
 * @param {function} props.takePicture
 * @param {function} props.onClose
 */

const Camera = (props) => {
  /* CODE FOR TAKING PHOTOS */
  const [photoBase64, setPhotoBase64] = useState('');
  let cameraRef = useRef(null); // used by props.takePicture()

  /**
   * Handler for pressing the shutter button.
   * Call to takePicture() requires cameraRef
   */
  const shutterHandler = () => {
    let photo = props.takePicture(cameraRef);
    setPhotoBase64(photo);
    setSaveVisible(true);
    // cameraRef.current.pausePreview();
  };

  // state variable for SavePhoto menu modal
  const [saveVisible, setSaveVisible] = useState(false);

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
    <View style={styles.container}>
      {/* <SavePhoto
        saveVisibility={saveVisible}
        onSave={saveHandler}
        onDiscard={discardHandler}
        photo={photoBase64}
      /> */}
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
            color={theme.EST_ORANGE}
            onPress={props.onClose}
            accessible={true}
            accessibilityLabel={'Back button'}
          />
        </View>
        <View style={styles.shutterButton}>
          <Icon
            name="aperture"
            size={35}
            color={'white'}
            onPress={props.takePicture}
            accessible={true}
            accessibilityLabel={'Shutter button'}
          />
        </View>
      </View>
      <View style={styles.bottomBuffer} />
    </View>
  );
};

export default Camera;
