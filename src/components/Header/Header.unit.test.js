import React from 'react';
import Header from './Header';
import {MenuProvider} from 'react-native-popup-menu';
import {render, fireEvent} from 'react-native-testing-library';

describe('Header test suite', () => {
  const mockOpenFilterMenu = jest.fn().mockName('openFilterMenu');
  const mockOpenCameraScreen = jest.fn().mockName('openCameraScreen');

  test('Pressing menu button works', () => {
    const {getByLabelText} = render(
      <MenuProvider>
        <Header
          openFilterMenu={mockOpenFilterMenu}
          openCameraScreen={mockOpenCameraScreen}
        />
      </MenuProvider>,
    );
    fireEvent.press(getByLabelText('Menu button'));
    expect(mockOpenFilterMenu).toHaveBeenCalled();
  });

  test('Header renders properly', () => {
    const {toJSON} = render(
      <MenuProvider>
        <Header
          openFilterMenu={mockOpenFilterMenu}
          openCameraScreen={mockOpenCameraScreen}
        />
      </MenuProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  // Can't seem to test if react-native-popup-menu appears after butoon is pressed
  // test('Pressing add button works', () => {
  //   const {getByLabelText, toJSON} = render(
  //     <Header
  //       openFilterMenu={mockOpenFilterMenu}
  //       openCameraScreen={mockOpenCameraScreen}
  //     />,
  //   );
  //   fireEvent.press(getByLabelText('Add to closet button'));
  //   expect(toJSON()).toMatchSnapshot();
  // });
});
