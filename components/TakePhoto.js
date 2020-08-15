import React, { useState } from 'react';
import {SafeAreaView, View, Modal, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/Feather';
import SavePhoto from './SavePhoto';

const SCREENWIDTH = Dimensions.get('window').width;

const EST_ORANGE = 'rgb(227, 131, 4)';

const TakePhoto = (props) => {
  const takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
  const [saveVisible, setSaveVisible] = useState(false);
  const shutterHandler = () => {
    takePicture();
    setSaveVisible(true);
  };
  return (
    <Modal visible={props.visible}>
      <View style={styles.container}>
        <SavePhoto saveVisibility={saveVisible} />
        <SafeAreaView style={styles.topContainer}>
          <Text style={styles.title}>Add New Clothes</Text>
        </SafeAreaView>
        <RNCamera
          style={styles.preview}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          captureAudio={false}
        />
        <View style={styles.bottomContainer}>
          <View style={styles.backButton}>
            <Icon
              name="arrow-left"
              size={25}
              color={EST_ORANGE}
              onPress={props.onClose}
            />
          </View>
          <View style={styles.shutterButton}>
            <Icon
              name="aperture"
              size={35}
              color={'white'}
              onPress={shutterHandler}
            />
          </View>
        </View>
        <View style={styles.bottomBuffer} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
    // borderWidth: 1,
    // borderColor: 'blue',
  },
  title: {
    fontSize: 17,
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    // borderWidth: 1,
    // borderColor: 'white',
  },
  backButton: {
    position: 'absolute',
    left: SCREENWIDTH / 6,
  },
  shutterButton: {
    // centers shutterButton regardless of backButton position
    position: 'absolute',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    // borderWidth: 1,
    // borderColor: 'orange',
  },
  preview: {
    flex: 12,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  bottomBuffer: {
    paddingBottom: 30,
  },
});

export default TakePhoto;
