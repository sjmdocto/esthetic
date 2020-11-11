import React, {useState, useRef, useContext, useEffect} from 'react';
import {View, Platform} from 'react-native';
import SavePhotoMenu from '../../components/SavePhotoMenu/SavePhotoMenu';
import * as ImagePicker from 'expo-image-picker';
import makeClothingItem from '../../util/makeClothingItem';
import addClothingItem from '../../util/addClothingItem';
import addToStorage from '../../util/addToStorage';
import ClosetContext from '../../util/ClosetContext';

const ImportScreen = ({navigation}) => {
  const [photoBase64, setPhotoBase64] = useState('');
  const [saveVisible, setSaveVisible] = useState(false);
  let cameraRef = useRef(null); // used by props.takePicture()

  const {closet, setCloset} = useContext(ClosetContext);

  /**
   * Handler for saving the photo that was just taken.
   * Saves the photo and clothing info into a clothingItem object,
   * and then saves that clothingItem object to AsyncStorage.
   * Finally, hide the SavePhoto menu modal
   * @param photo - photo's base64 representation
   * @param colorTag - selected colorTag for the clothing item
   * @param typeTag - selected typeTag for the clothing item
   */
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
    // Finally, resume camera preview
    cameraRef.current.resumePreview();
  };

  const discardHandler = () => {
    cameraRef.current.resumePreview();
    setSaveVisible(false);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    console.log(result);

    if (!result.cancelled) {
      setPhotoBase64(result.base64);
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

  pickImage();

  return (
    <View>
      <SavePhotoMenu
        saveVisibility={saveVisible}
        onSave={saveHandler}
        onDiscard={discardHandler}
        photo={photoBase64}
        closet={closet}
      />
    </View>
  );
};

export default ImportScreen;
