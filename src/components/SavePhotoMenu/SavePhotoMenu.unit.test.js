import React from 'react';
import ColorTagMenu from './ColorTagMenu';
import SavePhotoMenu from './SavePhotoMenu';
import TypeTagMenu from './TypeTagMenu';
import {fireEvent, render} from 'react-native-testing-library';
import {MenuProvider} from 'react-native-popup-menu';

describe('Save Photo Menu test suite:', () => {
  describe('ColorTagMenu tests: ', () => {
    const mockSetColorTag = jest.fn().mockName('setColorTag');
    test('Renders properly', () => {
      const {toJSON} = render(
        <MenuProvider>
          <ColorTagMenu setColorTag={mockSetColorTag} />
        </MenuProvider>,
      );
      expect(toJSON()).toMatchSnapshot();
    });
    // NOTE:
    // react-native-popup-menu isn't friendly with testing,
    // so it's functionality can't be tested at the moment
    // test('Menu options work', () => {
    //   const {getByTestId, toJSON} = render(
    //     <MenuProvider>
    //       <ColorTagMenu setColorTag={mockSetColorTag} />
    //     </MenuProvider>,
    //   );
    //   fireEvent.press(getByTestId('ColorTagMenu-trigger'));
    //   fireEvent.press(getByTestId('option-1'));
    //   expect(toJSON()).toMatchSnapshot();
    // });
  });
  describe('TypeTagMenu tests: ', () => {
    const mockSetTypeTag = jest.fn().mockName('setTypeTag');
    test('Renders properly', () => {
      const {toJSON} = render(
        <MenuProvider>
          <TypeTagMenu setTypeTag={mockSetTypeTag} />
        </MenuProvider>,
      );
      expect(toJSON()).toMatchSnapshot();
    });
  });
  describe('SavePhotoMenu tests: ', () => {
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
});
