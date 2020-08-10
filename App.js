import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from './components/Header';
import Body from './components/Body';
import Menu from './components/Menu';
import {MenuProvider} from 'react-native-popup-menu';

// **Was gonna use for filter color selection, now
// need to figure out how to delete from project**
// import {Picker} from '@react-native-community/picker'

// **Potentially will use for notch devices**
// import {getDeviceId} from 'react-native-device-info';

// const EST_ORANGE = 'rgb(227, 131, 4)';
// const EST_ORANGE_TRANSP = 'rgba(227, 131, 4, 0.92)';

// To-do: android phones w/notches need paddingTop

const App = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const openMenuHandler = () => {
    setMenuVisible(true);
  };
  const closeMenuHandler = () => {
    setMenuVisible(false);
  };
  /* NOT USED YET
  const [filterColor, setFilterColor] = useState('none');
  const chooseFilterColorHandler = color => {
    // To-do: make sure input color is actual color first
    setFilterColor(color);

  };
  */

  return (
    <MenuProvider>
      <SafeAreaView style={styles.main}>
        <Menu visible={menuVisible} onClose={closeMenuHandler} />
        <Header onPressMenu={openMenuHandler} />
        <Body />
      </SafeAreaView>
    </MenuProvider>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default App;
