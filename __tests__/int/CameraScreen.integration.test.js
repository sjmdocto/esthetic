import React from 'react';
import CameraScreen from './CameraScreen';
import {fireEvent, render} from 'react-native-testing-library';

describe('CameraScreen test suite:', () => {
  test('CameraScreen renders properly', () => {
    const {toJSON} = render(<CameraScreen />);
    expect(toJSON()).toMatchSnapshot();
  });
  test('Pressing shutter button opens Save Photo Menu', () => {
    const {getByLabelText, toJSON, update} = render(<CameraScreen />);
    fireEvent.press(getByLabelText('Shutter button'));
    update(<CameraScreen />);
    expect(toJSON()).toMatchSnapshot();
  });
});
