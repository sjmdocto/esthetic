import React from 'react';
import CameraHeader from './CameraHeader';
import CameraFooter from './CameraFooter';
import {render, fireEvent} from 'react-native-testing-library';

describe('Camera test suite:', () => {
  const mockBackButton = jest.fn().mockName('closeCamera');
  const mockTakePicture = jest.fn().mockName('takePicture');

  test('Header renders properly', () => {
    const {toJSON} = render(<CameraHeader />);
    expect(toJSON()).toMatchSnapshot();
  });

  test('Footer renders properly', () => {
    const {toJSON} = render(<CameraFooter />);
    expect(toJSON()).toMatchSnapshot();
  });

  test('Back button is functional', () => {
    const {getByLabelText} = render(
      <CameraFooter closeCamera={mockBackButton} />,
    );
    fireEvent.press(getByLabelText('Back button'));
    expect(mockBackButton).toHaveBeenCalled();
  });

  test('Save button is functional', () => {
    const {getByLabelText} = render(
      <CameraFooter takePicture={mockTakePicture} />,
    );
    fireEvent.press(getByLabelText('Shutter button'));
    expect(mockTakePicture).toHaveBeenCalled();
  });
});
