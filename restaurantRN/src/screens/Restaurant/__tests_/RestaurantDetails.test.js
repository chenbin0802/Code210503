import React from 'react'
import renderer from 'react-test-renderer'
import RestaurantDetails from '../RestaurantDetails'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store' //ES6 modules
import { mockedInitialState } from '../../../../test/MockedState'


const Id = 80086
test('render Restaurant Detail correctly', () => {
  const mockStore = configureStore([])
  const tree = renderer.create(
    <Provider store={mockStore(mockedInitialState)}>
      <RestaurantDetails navigation={{ getParam: (param) => Id}}/>
    </Provider>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
