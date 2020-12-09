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
import theme from '../../styles/theme.style';

/**
 * @param {*} props
 * @param {array} props.closet
 *
 * @param {number} props.filterColor
 * @param {function} props.setFilterColor
 * @param {number} props.filterType
 * @param {function} props.setFilterType
 */

const ClosetScreen = ({navigation}) => {
  const [menuVisible, setMenuVisible] = useState(false);
  // Wrapper for setMenuVisible(true)
  const openFilterMenu = () => {
    setMenuVisible(true);
  };
  // Wrapper for setMenuVisible(false).
  const closeFilterMenu = () => {
    setMenuVisible(false);
  };

  const [filterColor, setFilterColor] = useState(0);
  const [filterType, setFilterType] = useState(0);
  const {closet, setCloset} = useContext(ClosetContext);

  const onDelete = (key) => {
    let updatedCloset = deleteClothingItem(key, closet);
    setCloset(updatedCloset);
    deleteFromStorage(key);
  };

  const [photoBase64, setPhotoBase64] = useState('');
  const [saveVisible, setSaveVisible] = useState(false);

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

  const discardHandler = () => {
    setSaveVisible(false);
  };

  return (
    <MenuProvider>
      <SafeAreaView style={{flex: 1, backgroundColor: theme.EST_LIGHT_GREY}}>
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
      </SafeAreaView>
    </MenuProvider>
  );
};

export default ClosetScreen;
