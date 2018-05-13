import React from 'react'
import renderer from 'react-test-renderer'
import Card from './card'

describe('<Card />', () => {
  const props = {
    title: 'Test Title'
  }
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Card {...props} />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})