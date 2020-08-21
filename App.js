import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from './components/Header';
import Body from './components/Body';
import Menu from './components/Menu';
import {MenuProvider} from 'react-native-popup-menu';
import TakePhoto from './components/TakePhoto';

// **Potentially will use for notch devices**
// import {getDeviceId} from 'react-native-device-info';

// const EST_ORANGE = 'rgb(227, 131, 4)';
// const EST_ORANGE_TRANSP = 'rgba(227, 131, 4, 0.92)';

// To-do: android phones w/notches need paddingTop

// Brainstorming:
// 1a) Save each photoBase64 to a WardrobeKey array since it will
//      be used as the key for each clothingItem object in AsyncStorage
// 1b) Save WardrobeKey array to AsyncStorage
// 2)  Accessing the photos:
//      When Body calls filterItems(), it will use the photoBase64 key
//      to get the corresponding value.colorTag and value.typeTag from AsyncStorage
const clothingItems = [
  {name: 'Red Tee', color: 4, type: 6, key: '0'},
  {name: 'Black Pants', color: 1, type: 7, key: '1'},
  {name: 'Red Octobers', color: 4, type: 10, key: '2'},
  {name: 'White AF1', color: 2, type: 10, key: '3'},
  {name: 'Green Crocs', color: 7, type: 10, key: '4'},
  {name: 'Yellow pants', color: 6, type: 7, key: '5'},
  {name: 'Black Jacket', color: 1, type: 1, key: '6'},
  {name: 'Blue Dress Shirt', color: 8, type: 2, key: '7'},
  {name: 'Orange Tsinelas', color: 5, type: 10, key: '8'},
  {name: 'Black AF1 Activities', color: 1, type: 10, key: '9'},
  {name: 'WHAT ARE THOSE!!!!', color: 1, type: 10, key: '10'},
  {name: 'e-boy hoodie', color: 1, type: 4, key: '11'},
  {name: 'Purple tee', color: 9, type: 6, key: '12'},
  {name: 'Multicolored shoes', color: 10, type: 10, key: '13'},
  {name: 'Grey jacket', color: 4, type: 1, key: '14'},
  {name: 'White pants', color: 2, type: 7, key: '15'},
  {name: 'Yellow shorts', color: 6, type: 8, key: '16'},
  {name: 'Green button up', color: 7, type: 5, key: '17'},
];

const App = () => {
  // Filter variables
  const [filterColor, setFilterColor] = useState(0);
  const [filterType, setFilterType] = useState(0);
  // Filter menu stuff
  const [menuVisible, setMenuVisible] = useState(false);
  const openMenuHandler = () => {
    setMenuVisible(true);
  };
  const closeMenuHandler = () => {
    setMenuVisible(false);
  };
  // Camera stuff
  const [cameraOpen, setCameraOpen] = useState(false);
  const openCamera = () => {
    setCameraOpen(true);
  };
  const closeCamera = () => {
    setCameraOpen(false);
  };
  return (
    <MenuProvider>
      <SafeAreaView style={styles.main}>
        <Menu
          visible={menuVisible}
          onClose={closeMenuHandler}
          //filterColor={filterColor}
          setFilterColor={setFilterColor}
          //filterType={filterType}
          setFilterType={setFilterType}
        />
        <Header onPressMenu={openMenuHandler} onTakePhoto={openCamera} />
        <Body
          clothingItems={clothingItems}
          filterColor={filterColor}
          //setFilterColor={setFilterColor}
          filterType={filterType}
          //setFilterType={setFilterType}
        />
        <TakePhoto
          visible={cameraOpen}
          onOpen={openCamera}
          onClose={closeCamera}
        />
      </SafeAreaView>
    </MenuProvider>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
});

export default App;
