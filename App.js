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
                <Text style = {{textAlign: 'center', top: '10%'}}>Filter</Text>
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
    //right: '33%',
    //opacity: 99,
    //paddingTop: 50,
  },
  nonMenuArea: {
    //backgroundColor: 'red',
    flex: 4,
  },
});

export default App; 
