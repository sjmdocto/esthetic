import React, {useState, useRef, useContext} from 'react';
import {RNCamera} from 'react-native-camera';
import CameraHeader from '../../components/Camera/CameraHeader';
import CameraFooter from '../../components/Camera/CameraFooter';
import takePicture from '../../util/takePicture';
import SavePhotoMenu from '../../components/SavePhotoMenu/SavePhotoMenu';
import makeClothingItem from '../../util/makeClothingItem';
import addClothingItem from '../../util/addClothingItem';
import addToStorage from '../../util/addToStorage';
import ClosetContext from '../../util/ClosetContext';
import {styles} from './CameraScreen.style';
import writePhotoToDisk from '../../util/writePhotoToDisk';
import connectPhotoToItem from '../../util/connectPhotoToItem';
import {SafeAreaView} from 'react-native-safe-area-context';

/**
 * @param {*} navigation
 */

const CameraScreen = ({navigation}) => {
  /* CODE FOR TAKING PHOTOS */
  const [photoBase64, setPhotoBase64] = useState('');
  let cameraRef = useRef(null); // used by props.takePicture()

  // state variable for SavePhoto menu modal
  const [saveVisible, setSaveVisible] = useState(false);

  const {closet, setCloset} = useContext(ClosetContext);

  /**
   * Handler for pressing the shutter button.
   * Call to takePicture() requires cameraRef
   * Not sure if async and await are necessary for this
   */
  const shutterHandler = async () => {
    let photo = await takePicture(cameraRef);
    setPhotoBase64(photo);
    // cameraRef.current.pausePreview();
    setSaveVisible(true);
  };

  /**
   * Handler for discarding the photo that was just taken.
   */
  const discardHandler = () => {
    cameraRef.current.resumePreview();
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
  const saveHandler = async (colorTag, typeTag) => {
    // First, create clothingItem
    const clothingItem = makeClothingItem(colorTag, typeTag);
    let clothingItemWithPhoto;
    try {
      // Then write the photo to disk
      await writePhotoToDisk(clothingItem, photoBase64);
      // Then, connect photo to clothingItem
      clothingItemWithPhoto = await connectPhotoToItem(clothingItem);
      // Then, add clothingItem to closet state
      const newCloset = addClothingItem(closet, clothingItemWithPhoto);
      setCloset(newCloset);
      // Next add clothingItem to Storage
      addToStorage(clothingItem);
      // Then, Hide the save menu
      setSaveVisible(false);
      // Finally, resume camera preview
      cameraRef.current.resumePreview();
    } catch (e) {}
  };
  return (
    <SafeAreaView style={styles.container}>
      <SavePhotoMenu
        saveVisibility={saveVisible}
        onSave={saveHandler}
        onDiscard={discardHandler}
        photo={photoBase64}
        closet={closet}
      />
      <CameraHeader />
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
      <CameraFooter
        closeCamera={() => navigation.navigate('Closet')}
        takePicture={shutterHandler}
      />
    </SafeAreaView>
  );
};

export default CameraScreen;