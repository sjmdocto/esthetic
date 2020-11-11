import React, {useState, useContext, useEffect} from 'react';
import {View, Platform} from 'react-native';
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

    //console.log(result);

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
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const saveHandler = (colorTag, typeTag) => {
    // First, create clothingItem
    const clothingItem = makeClothingItem(photoBase64, colorTag, typeTag);
    // Then, add clothingItem to closet state
    const newCloset = addClothingItem(closet, clothingItem);
    setCloset(newCloset);
    // Next add clothingItem to Storage
    addToStorage(clothingItem);
    // Then, Hide the save menu
    setSaveVisible(false);

    // Finally, resume importing
    // pickImage();

    // Finally, resume camera preview
    //cameraRef.current.resumePreview();
  };

  const discardHandler = () => {
    //cameraRef.current.resumePreview();
    setSaveVisible(false);
  };

  return (
    <MenuProvider>
      <View style={{flex: 1}}>
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
      </View>
    </MenuProvider>
  );
};

export default ClosetScreen;
