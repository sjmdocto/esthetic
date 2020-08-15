import React from 'react';
import {View, Text, Modal, StyleSheet, Dimensions} from 'react-native';

const SCREENWIDTH = Dimensions.get('window').width;
const SCREENHEIGHT = Dimensions.get('window').height;

const EST_ORANGE = 'rgb(227, 131, 4)';

const SavePhoto = (props) => {
  return (
    <Modal visible={props.saveVisibility} transparent={true}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Select Tags</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.imageContainer}>
            <Text>Photo</Text>
          </View>
          <View style={styles.tagsContainer}>
            <Text style={styles.tagsText}>Color:</Text>
            <Text style={styles.tagsText}>Type:</Text>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.discardButton}>
            <Text style={styles.buttonText}>Discard</Text>
          </View>
          <View style={styles.saveButton}>
            <Text style={styles.buttonText}>Save</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 300,
    backgroundColor: '#1F1F1F',
    borderRadius: 40,
    bottom: SCREENHEIGHT / 5,
    // borderWidth: 1,
    // borderColor: 'purple',
  },
  titleContainer: {
    flex: 1,
    paddingTop: 10,
    // borderWidth: 1,
    // borderColor: 'blue',
  },
  body: {
    flex: 3,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'yellow',
    paddingHorizontal: 10,
  },
  imageContainer: {
    flex: 45,
    height: 140,
    width: 140,
    backgroundColor: 'white',
    marginRight: 10,
  },
  buttonsContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 1,
    // borderWidth: 1,
    // borderColor: 'green',
  },
  titleText: {
    color: 'white',
    fontSize: 28,
  },
  tagsContainer: {
    flex: 55,
    justifyContent: 'space-evenly',
    borderWidth: 1,
    borderColor: 'red',
  },
  tagsText: {
    color: 'white',
    fontSize: 14,
  },
  discardButton: {
    flex: 1,
    marginHorizontal: 20,
    // marginVertical: 5,
    height: 50,
    width: 1,
    backgroundColor: '#141414',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButton: {
    flex: 1,
    marginHorizontal: 20,
    // marginVertical: 5,
    height: 50,
    width: 1,
    backgroundColor: EST_ORANGE,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default SavePhoto;
