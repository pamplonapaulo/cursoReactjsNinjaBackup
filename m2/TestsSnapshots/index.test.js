'use script'

const responseFromServer = () => [
  'javascript',
  'react',
  'node'
]

it('Test snapshot', () => {
  expect(responseFromServer()).toMatchSnapshot()
})
