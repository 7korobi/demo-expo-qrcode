import 'react-native';
import React from 'react';
import CodeScreen from '../screens/CodeScreen';
import renderer from 'react-test-renderer';

it('renders the code screen', async () => {
  const tree = renderer.create(<CodeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
