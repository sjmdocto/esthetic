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
import addClothingItem from '../../util/addClothingItem';
import addToStorage from '../../util/addToStorage';
import writePhotoToDisk from '../../util/writePhotoToDisk';
import connectPhotoToItem from '../../util/connectPhotoToItem';
import {SafeAreaView} from 'react-native-safe-area-context';
import WelcomeText from '../../components/Welcome/WelcomeText';
import colorKey from '../../util/colorKey';
import typeKey from '../../util/typeKey';
import createItemTicket from '../../util/createItemTicket';
import fetchColorTag from '../../util/fetchColorTag';
import fetchTypeTag from '../../util/fetchTypeTag';
import deletePhotoFromDisk from '../../util/deletePhotoFromDisk';
import {styles} from './ClosetScreen.style';

/**
 * @function ClosetScreen
 * @param {} navigation
 */

const ClosetScreen = ({navigation}) => {
  /* CODE FOR MENU */
  const [menuVisible, setMenuVisible] = useState(false);
  const [filterColor, setFilterColor] = useState(colorKey.none);
  const [filterType, setFilterType] = useState(typeKey.none);
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
  const [ticket, setTicket] = useState({key: '', date: 0});
  const [colorTag, setColorTag] = useState(colorKey.black);
  const [typeTag, setTypeTag] = useState(typeKey.outerwear);
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
    let color, type;
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0,
        base64: true,
      });

      if (!result.cancelled) {
        // 1) Update the photo state to the new photo
        setPhotoBase64(result.base64);
        // 2a) Create item ticket so the new clothingItem has an ID
        let item = createItemTicket();
        // 2b) Update ticket state to the new itemTicket
        setTicket(item);
        // 3) Write the photo to disk
        await writePhotoToDisk(item, result.base64);
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
      }
    } catch (e) {}
  };

  /**
   * @async
   * @function saveHandler
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
    } catch (e) {}
  };

  /**
   * @function discardHandler
   * TODO: delete photo from disk
   * @returns {void}
   */
  const discardHandler = async () => {
    try {
      await deletePhotoFromDisk(ticket);
      setSaveVisible(false);
    } catch (e) {}
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
          colorTag={colorTag}
          setColorTag={setColorTag}
          typeTag={typeTag}
          setTypeTag={setTypeTag}
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
