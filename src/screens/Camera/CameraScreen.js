import React, {useState, useRef, useContext} from 'react';
import {RNCamera} from 'react-native-camera';
import CameraHeader from '../../components/Camera/CameraHeader';
import CameraFooter from '../../components/Camera/CameraFooter';
import takePicture from '../../util/takePicture';
import SavePhotoMenu from '../../components/SavePhotoMenu/SavePhotoMenu';
import addClothingItem from '../../util/addClothingItem';
import addToStorage from '../../util/addToStorage';
import ClosetContext from '../../util/ClosetContext';
import {styles} from './CameraScreen.style';
import writePhotoToDisk from '../../util/writePhotoToDisk';
import connectPhotoToItem from '../../util/connectPhotoToItem';
import {SafeAreaView} from 'react-native-safe-area-context';
import createItemTicket from '../../util/createItemTicket';
import fetchColorTag from '../../util/fetchColorTag';
import fetchTypeTag from '../../util/fetchTypeTag';
import typeKey from '../../util/typeKey';
import colorKey from '../../util/colorKey';
import deletePhotoFromDisk from '../../util/deletePhotoFromDisk';

/**
 * @function CameraScreen
 * @param {} navigation
 */
const CameraScreen = ({navigation}) => {
  const [photoBase64, setPhotoBase64] = useState('');
  const [saveVisible, setSaveVisible] = useState(false);
  const [colorTag, setColorTag] = useState(colorKey.black);
  const [typeTag, setTypeTag] = useState(typeKey.outerwear);
  const [ticket, setTicket] = useState({key: '', date: 0});
  const {closet, setCloset} = useContext(ClosetContext);
  let cameraRef = useRef(null); // used by props.takePicture()

  /**
   * Handler for pressing the shutter button.
   *
   * 2) Create a clothingItem
   * 3) Save the photo as a jpeg/png so it can be sent to the cloud
   * 4) Send the photo to the cloud to determine it's tags
   * 4a) Pass the chosen tags to the Save menu
   * 5) Call setPhotoBase64() to update the state that holds the photo just taken.
   * 6) Call setSaveVisible(true) to open the Save menu
   * NOTE: Call to takePicture() requires cameraRef.
   * @async
   * @function shutterHandler
   * @returns {Promise<void>}
   */
  const shutterHandler = async () => {
    let photo;
    let color; // for ML algorithm
    let type; // for ML algorithm
    try {
      // 1a) Call takePicture(), which returns the photo in a base64-string.
      photo = await takePicture(cameraRef);
      // 1b) Update the photo state to the new photo
      setPhotoBase64(photo);
      // 2a) Create item ticket so the new clothingItem has an ID
      let item = createItemTicket();
      // 2b) Update ticket state to the new itemTicket
      setTicket(item);
      // 3) Write the photo to disk
      await writePhotoToDisk(item, photo);

      // 4a) Send photo to ML model to determine color
      color = fetchColorTag();
      // 4b) Update colorTag state to determined color
      setColorTag(color);

      // 5a) Send photo to ML model to determine clothing type
      type = fetchTypeTag();
      // 5b) Update typeTag state to determined color
      setTypeTag(type);

      // 6) Open the Save menu
      setSaveVisible(true);
    } catch (e) {}
  };

  /**
   * Handler for discarding the photo that was just taken.
   * TODO: delete photo from disk
   * @function discardHandler
   */
  const discardHandler = async () => {
    try {
      await deletePhotoFromDisk(ticket);
      cameraRef.current.resumePreview();
      setSaveVisible(false);
    } catch (e) {}
  };

  /**
   * Handler for saving the photo that was just taken.
   * @async
   * @function saveHandler
   * @param colorTag - selected colorTag for the clothing item
   * @param typeTag - selected typeTag for the clothing item
   * @returns {Promise<void>}
   */
  const saveHandler = async () => {
    // 1) Add tag properties to clothingItem
    let item = ticket;
    item.colorTag = colorTag;
    item.typeTag = typeTag;
    let newCloset;
    try {
      // 2) Add clothingItem to storage
      await addToStorage(item);
      // 3) Add photo property to clothingItem
      let itemWithPhoto;
      itemWithPhoto = await connectPhotoToItem(item);
      // 4a) Add item to closet
      newCloset = addClothingItem(closet, itemWithPhoto);
      // 4b) Update closet state to contain new item
      setCloset(newCloset);
      // 5) Hide the save menu
      setSaveVisible(false);
      // 6) Resume camera preview
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
        colorTag={colorTag}
        setColorTag={setColorTag}
        typeTag={typeTag}
        setTypeTag={setTypeTag}
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
