import React, {useState, useContext, useEffect} from 'react';
import {Alert, Platform} from 'react-native';
import Header from '../../components/Header/Header';
import Grid from '../../components/Grid/Grid';
import FilterMenu from '../../components/FilterMenu/FilterMenu';
import deleteClothingItem from '../../util/deleteClothingItem';
import deleteFromStorage from '../../util/deleteFromStorage';
import {MenuProvider} from 'react-native-popup-menu';
import ClosetContext from '../../util/ClosetContext';
import * as ImagePicker from 'expo-image-picker';
import SavePhotoMenu from '../../components/SavePhotoMenu/SavePhotoMenu';
import makeClothingItem from '../../util/makeClothingItem';
import addClothingItem from '../../util/addClothingItem';
import addToStorage from '../../util/addToStorage';
import writePhotoToDisk from '../../util/writePhotoToDisk';
import connectPhotoToItem from '../../util/connectPhotoToItem';
import {SafeAreaView} from 'react-native-safe-area-context';
import WelcomeText from '../../components/Welcome/WelcomeText';
import {styles} from './ClosetScreen.style';

/**
 * @function ClosetScreen
 * @param {} navigation
 */

const ClosetScreen = ({navigation}) => {
  /* CODE FOR MENU */
  const [menuVisible, setMenuVisible] = useState(false);
  const [filterColor, setFilterColor] = useState(0);
  const [filterType, setFilterType] = useState(0);
  /** Wrapper for setMenuVisible(true)
   * @function openFilterMenu
   * @returns {void}
   */
  const openFilterMenu = () => {
    setMenuVisible(true);
  };
  /** Wrapper for setMenuVisible(false)
   * @function closeFilterMenu
   * @returns {void}
   */
  const closeFilterMenu = () => {
    setMenuVisible(false);
  };

  /* CODE FOR CLOSET */
  const {closet, setCloset} = useContext(ClosetContext);
  const [photoBase64, setPhotoBase64] = useState('');
  const [saveVisible, setSaveVisible] = useState(false);

  /**
   * @function onDelete
   * @param {string} key
   * @returns {void}
   */
  const onDelete = (key) => {
    let updatedCloset = deleteClothingItem(key, closet);
    setCloset(updatedCloset);
    deleteFromStorage(key);
  };

  /* CODE FOR IMPORT */

  // Ensure that camera roll access has been granted
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const {status} = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert(
            'Permissions Error',
            'Sorry, we need camera roll permissions to make this work!',
            [{text: 'OK', onPress: () => console.log('OK Pressed')}],
            {cancelable: false},
          );
        }
      }
    })();
  }, []);

  /**
   * Function to choose image from photo gallery
   * @async
   * @function pickImage
   * @returns {Promise<void>}
   */
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0,
      base64: true,
    });

    if (!result.cancelled) {
      setPhotoBase64(result.base64);
      setSaveVisible(true);
    }
  };

  /**
   * @async
   * @function saveHandler
   * @param {number} colorTag
   * @param {number} typeTag
   * @returns {Promise<void>}
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
      // NOTE: NOT clothingItemWithPhoto bc photo variable takes up a lot of data
      await addToStorage(clothingItem);
      // Then, Hide the save menu
      setSaveVisible(false);
    } catch (e) {}
  };

  /**
   * @function discardHandler
   * @returns {void}
   */
  const discardHandler = () => {
    setSaveVisible(false);
  };

  /* CODE FOR WELCOME TEXT */
  const [isClosetEmpty, setIsClosetEmpty] = useState(true);
  /* if closet is empty, WelcomeText is shown.
   * if closet is not empty, WelcomeText isn't shown.
   */
  useEffect(() => {
    if (closet.length !== 0) {
      setIsClosetEmpty(false);
    } else if (closet.length === 0) {
      setIsClosetEmpty(true);
    }
  }, [closet]);

  return (
    <MenuProvider>
      <SafeAreaView style={styles.container}>
        <SavePhotoMenu
          saveVisibility={saveVisible}
          onSave={saveHandler}
          onDiscard={discardHandler}
          photo={photoBase64}
          closet={closet}
        />
        <FilterMenu
          visible={menuVisible}
          onClose={closeFilterMenu}
          setFilterColor={setFilterColor}
          setFilterType={setFilterType}
        />
        <Header
          openFilterMenu={openFilterMenu}
          openCamera={() => navigation.navigate('Camera')}
          onImport={pickImage}
        />
        <Grid
          closet={closet}
          filterColor={filterColor}
          filterType={filterType}
          onDelete={onDelete}
        />
        <WelcomeText visible={isClosetEmpty} />
      </SafeAreaView>
    </MenuProvider>
  );
};

export default ClosetScreen;
