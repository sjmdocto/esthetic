/**
 * Handler for taking a photo.
 * @async
 * @function takePicture
 * @param cameraRef - see RNCamera docs
 * @return {Promise<string>}
 */
const takePicture = async (cameraRef) => {
  let photoBase64 = '';
  if (cameraRef) {
    const options = {quality: 0.5, base64: true, pauseAfterCapture: true};
    const data = await cameraRef.current.takePictureAsync(options);
    photoBase64 = data.base64;
  }
  return photoBase64;
};

export default takePicture;
