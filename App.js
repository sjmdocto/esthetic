import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from './components/Header';
import Body from './components/Body';
import Menu from './components/Menu';
import {MenuProvider} from 'react-native-popup-menu';
import TakePhoto from './components/TakePhoto';

// **Was gonna use for filter color selection, now
// need to figure out how to delete from project**
// import {Picker} from '@react-native-community/picker'

// **Potentially will use for notch devices**
// import {getDeviceId} from 'react-native-device-info';

// const EST_ORANGE = 'rgb(227, 131, 4)';
// const EST_ORANGE_TRANSP = 'rgba(227, 131, 4, 0.92)';

// To-do: android phones w/notches need paddingTop

const App = () => {
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
        <Menu visible={menuVisible} onClose={closeMenuHandler} />
        <Header onPressMenu={openMenuHandler} onTakePhoto={openCamera} />
        <Body />
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
