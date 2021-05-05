import React from 'react'
import renderer from 'react-test-renderer'
import Restaurant from '../Restaurant'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store' //ES6 modules
import { mockedInitialState } from '../../../../test/MockedState'


test('render Restaurant correctly', () => {

  const mockStore = configureStore([])
  const tree = renderer.create(
    <Provider store={mockStore(mockedInitialState)}>
      <Restaurant />
    </Provider>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
