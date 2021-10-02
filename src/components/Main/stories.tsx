import { Story, Meta } from '@storybook/react/types-6-0';

import { Main } from './index';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Boilerplate',
    description:
      'Typescript, ReactJs, NextJs e Styled components, Storybook, React Testing Library',
  },
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;
