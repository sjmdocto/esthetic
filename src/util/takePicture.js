// import React from 'react';
// import {RNCamera} from 'react-native-camera';

// and pass in data

/**
 * Handler for taking a photo.
 * @param cameraRef - see RNCamera docs
 * @return {string}
 */
const takePicture = async (cameraRef) => {
  let photoBase64 = '';
  if (cameraRef) {
    const options = {quality: 0.5, base64: true};
    const data = await cameraRef.current.takePictureAsync(options);
    // setPhotoBase64(data.base64);
    photoBase64 = data.base64;
  }
  // make SavePhotoMenu visible
  return photoBase64;
};

export default takePicture;
