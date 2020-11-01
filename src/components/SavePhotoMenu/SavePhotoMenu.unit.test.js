import React from 'react';
import {fireEvent, render} from 'react-native-testing-library';
import SavePhotoMenu from './SavePhotoMenu';

describe('Save Photo Menu test suite:', () => {
  const mockOnDiscard = jest.fn().mockName('onDiscard');
  const mockOnSave = jest.fn().mockName('onSave');
  const testPhoto = 'base64';
  beforeEach(() => {
    mockOnDiscard.mockReset();
    mockOnSave.mockReset();
  });

  test('Renders properly', () => {
    const {toJSON} = render(
      <SavePhotoMenu onSave={mockOnSave} photo={testPhoto} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  test('Discard button is functional', () => {
    const {getByLabelText} = render(
      <SavePhotoMenu
        onSave={mockOnSave}
        onDiscard={mockOnDiscard}
        photo={'a'}
      />,
    );
    fireEvent.press(getByLabelText('Discard button'));
    expect(mockOnDiscard).toHaveBeenCalled();
  });

  test('Save button is functional', () => {
    const {getByLabelText} = render(
      <SavePhotoMenu onSave={mockOnSave} photo={'a'} />,
    );
    fireEvent.press(getByLabelText('Save button'));
    expect(mockOnSave).toHaveBeenCalled();
  });
});
