import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/renderWithTheme'
import { Heading } from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    const { container } = renderWithTheme(<Heading>Hello world</Heading>)
    expect(screen.getByRole('heading', { name: /hello world/i })).toHaveStyle({
      color: '#FAFAFA'
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
