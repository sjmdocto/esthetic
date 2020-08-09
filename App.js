import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  Platform,
  StatusBar,
} from 'react-native';
import Header from './components/Header';
import Body from './components/Body';
import {getDeviceId} from 'react-native-device-info';
import {MenuProvider} from 'react-native-popup-menu';

const EST_ORANGE = 'rgb(227, 131, 4)';
const EST_ORANGE_TRANSP = 'rgba(227, 131, 4, 0.92)';

// To-do: android phones w/notches need paddingTop

const App = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const openMenuHandler = () => {
    setMenuVisible(true);
  };
  const closeMenuHandler = () => {
    setMenuVisible(false);
  };

  return (
    <MenuProvider>
      <SafeAreaView style = {styles.main}>
          <Modal 
              visible = {menuVisible} 
              transparent = {true} 
              statusBarTranslucent = {true}>
            <View style = {styles.menuScreen}>
              <View style = {styles.menuArea}>
                <View style = {styles.menuHeader}>
                  <Text style = {styles.filtersTitle}>Filters</Text>
                </View>
              </View>
              <TouchableWithoutFeedback onPress = {closeMenuHandler}>
                <View style = {styles.nonMenuArea}>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </Modal>
        <Header onPressMenu = {openMenuHandler}/>
        <Body/>
      </SafeAreaView>
    </MenuProvider>
  );

};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  menuScreen: {
    flexDirection: 'row',
    flex: 1,
    // if android, can use StatusBar.currentHeight
    // else, for iOS, has to be set manually to 20
    paddingTop: (Platform.OS === 'android') ? StatusBar.currentHeight : 0,
  },
  menuArea: {
    backgroundColor: EST_ORANGE_TRANSP,
    flex: 9,
  },
  menuHeader: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    height: '8%', 
  },
  filtersTitle: {
    color: 'white',
    paddingTop: '3%',
    paddingLeft: '5%',
    fontWeight: 'bold',
    fontSize: 30,
  },
  nonMenuArea: {
    flex: 4,
  },
});

export default App; 
