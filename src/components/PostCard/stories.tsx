import { Meta, Story } from '@storybook/react/types-6-0'
import { PostCard, PostCardProps } from '.'

export default {
  title: 'PostCard',
  component: PostCard,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'blog-dark'
    }
  },
  args: {
    title: 'React',
    url: '/post',
    cover: 'https://source.unsplash.com/user/willianjusten/300x140'
  }
} as Meta

export const Default: Story<PostCardProps> = args => (
  <div style={{ width: '30rem' }}>
    <PostCard {...args} />
  </div>
)
