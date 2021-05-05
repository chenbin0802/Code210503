import React from 'react'

import renderer from 'react-test-renderer'
import Icon from '../Icon'

test('render Icon correctly', () => {
  // TODO: This address may change
  const uri = 'http://d30v2pzvrfyzpo.cloudfront.net/uk/images/restaurants/112766.gif'
  const tree = renderer.create(<Icon uri={uri} />).toJSON()
  expect(tree).toMatchSnapshot()
})


test('render null if Icon uri is null', () => {
  const tree = renderer.create(<Icon />).toJSON()
  expect(tree).toBe(null)
})
