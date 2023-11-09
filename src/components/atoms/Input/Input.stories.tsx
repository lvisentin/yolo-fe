import { Meta, StoryFn } from '@storybook/react';
import { Input, InputProps } from './Input';

export default {
  title: 'components/Input',
  component: Input,
  argTypes: {},
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const Base = Template.bind({});

Base.args = {
  name: 'Input',
  placeholder: 'Input',
} as InputProps;
