import React from 'react';
import WelcomeText from './WelcomeText';
import {render} from 'react-native-testing-library';

describe('WelcomeText test suite:', () => {
  test('If visible prop is equal to false, WelcomeText is NOT rendered.', () => {
    const isVisible = false;
    const {toJSON} = render(<WelcomeText visible={isVisible} />);
    expect(toJSON()).toMatchSnapshot();
  });
  test('If visible prop is equal to true, WelcomeText is rendered.', () => {
    const isVisible = true;
    const {toJSON} = render(<WelcomeText visible={isVisible} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
