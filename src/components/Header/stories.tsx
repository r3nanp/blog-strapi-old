import { Meta, Story } from '@storybook/react/types-6-0'
import { Header, HeaderProps } from '.'
import { FaArrowLeft } from 'react-icons/fa'

export default {
  title: 'Header',
  component: Header,
  argTypes: {
    icon: { type: '' }
  }
} as Meta

export const Default: Story<HeaderProps> = args => <Header {...args} />

export const withIcon: Story<HeaderProps> = args => <Header {...args} />

withIcon.args = {
  icon: <FaArrowLeft />
}
